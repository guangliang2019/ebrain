import React from 'react'
import {Progress,Button} from 'antd'
import {CaretRightOutlined,PauseOutlined,DeleteOutlined} from '@ant-design/icons'
const {ipcRenderer} = window.require('electron')
let TotalBytes = ''
let ReceivedBytes = ''
let LastReceivedBytes = ''
let DownloadSpeed = ''
let Speed = ''
let FileName = ''
ipcRenderer.on('new-download-item',(event,item) => {
    TotalBytes = item.totalBytes
    ReceivedBytes = item.receivedBytes
    FileName = item.filename
})
class Downloading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filename: FileName,
            receivedBytes: ReceivedBytes,
            totalBytes: TotalBytes,
            downloadspeed: DownloadSpeed,
            lastreceivedBytes: LastReceivedBytes,
            speed: Speed,
            ifPause: 0,
            status: '暂停'
        }
    }
    componentDidMount(){
        let ifOver = setInterval(() => {
            if(ReceivedBytes === TotalBytes){
                clearInterval(ifOver)
            }
            ipcRenderer.on('download-item-updated',(event,item) => {
                console.log(item.paused)
                ReceivedBytes = item.receivedBytes
                LastReceivedBytes = this.state.lastreceivedBytes
                DownloadSpeed = ReceivedBytes - LastReceivedBytes
                LastReceivedBytes = ReceivedBytes
                DownloadSpeed = DownloadSpeed*2/(1024*1024)
                if(DownloadSpeed < 1){
                    DownloadSpeed *= 1024
                    Speed = 'KB/s'
                    if(DownloadSpeed < 1){
                        DownloadSpeed *= 1024
                        Speed = 'b/s'
                    }
                }else{
                    Speed = 'MB/s'
                }
            })
            this.setState({
                receivedBytes: ReceivedBytes,
                lastreceivedBytes: LastReceivedBytes,
                downloadspeed: DownloadSpeed,
                speed: Speed,
            })
        },50)
    }
    render() {
        return (
            <>
                <div style = {{
                    width: '800px',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style = {{
                        marginLeft: 20,
                        width: 80,
                    }}>{this.state.filename}</div>
                    <Progress style = {{
                        marginLeft: '40px',
                        marginTop: '25px',
                    }} percent = {((this.state.receivedBytes/this.state.totalBytes)*100).toFixed(2)} showInfo = {false}></Progress>
                    <div style = {{
                        marginLeft: '5px',
                        marginTop: '25px',
                        width: '150px',

                    }}>{this.state.ifPause === 0?(this.state.downloadspeed/1).toFixed(2)+this.state.speed:'已暂停'}</div>
                    <div style = {{
                        width: 100,
                        height: 40,
                        marginTop: '22px',
                        marginLeft: 200,
                        fontSize: '15px',
                    }}>
                        <Button
                            className="button"
                            style={{
                                border: 'none',
                                backgroundColor: 'transparent'
                            }}
                            onClick = {() =>{
                                if(this.state.ifPause === 0){
                                    ipcRenderer.send('pause','Pause')
                                    this.setState({
                                        ifPause: 1,
                                    })
                                }else{
                                    ipcRenderer.send('resume','Resume')
                                    this.setState({
                                        ifPause: 0,
                                    })
                                }
                            }}
                            shape="circle"
                            icon={this.state.ifPause === 1?<CaretRightOutlined
                                className="button"
                                style={{
                                    boxShadow:'none',
                                    fontSize: '24px',
                                    color: 'black',
                                    '&:hover > $button': {
                                        color: '#FFFFFF'
                                    },
                                }}
                            />:<PauseOutlined
                            className="button"
                            style={{
                                boxShadow:'none',
                                fontSize: '24px',
                                color: 'black',
                                '&:hover > $button': {
                                    color: '#FFFFFF'
                                },
                            }}
                        />}/>
                    </div>
                    <div style = {{
                        marginLeft: 50,
                        marginTop: '22px',
                        width: 100,
                        height: 40,
                        fontSize: '15px',
                    }}>
                        <Button
                            className="button"
                            style={{
                                border: 'none',
                                backgroundColor: 'transparent'
                            }}
                            onClick = {() => {
                                ipcRenderer.send('cancel','Cancel')
                            }}
                            shape="circle"
                            icon={<DeleteOutlined
                                className="button"
                                style={{
                                    boxShadow:'none',
                                    fontSize: '24px',
                                    color: 'black',
                                    '&:hover > $button': {
                                        color: '#FFFFFF'
                                    },
                                }}
                            />}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Downloading