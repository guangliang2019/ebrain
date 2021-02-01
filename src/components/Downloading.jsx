import React from 'react'
import {Progress,Button} from 'antd'
import {CaretRightOutlined,PauseOutlined,DeleteOutlined} from '@ant-design/icons'
const {ipcRenderer} = window.require('electron')
let ReceivedBytes = ''
let LastReceivedBytes = ''
let DownloadSpeed = ''
let Speed = ''
let startTime = ''
let Message = ''
let ifDone = 0

class Downloading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receivedBytes: '',
            lastreceivedBytes: LastReceivedBytes,
            speed: Speed,
            ifPause: 0,
            ifDone: 0,
            message: '',
        }
    }
    componentDidMount(){
        let ifOver = setInterval(() => {
            if(this.state.receivedBytes === this.props.TotalBytes){
                ifDone = 1
            }
            ipcRenderer.on('download-item-updated',(event,item) => {
                if(this.props.StartTime === item.startTime){
                    startTime = item.startTime
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
                }
            })
            if(startTime === this.props.StartTime){
                if(ifDone === 1){
                    Message = '已完成'
                }
                else{
                    if(this.state.ifPause === 0){
                        Message = (DownloadSpeed/1).toFixed(2)+this.state.speed
                    }
                    else{
                        Message = '已暂停'
                    }
                }
                this.setState({
                    receivedBytes: ReceivedBytes,
                    lastreceivedBytes: LastReceivedBytes,
                    speed: Speed,
                    message: Message
                })
            }
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
                    }}>{this.props.FileName}</div>
                    <Progress style = {{
                        marginLeft: '40px',
                        marginTop: '25px',
                    }} percent = {((this.state.receivedBytes/this.props.TotalBytes)*100).toFixed(2)} showInfo = {false}></Progress>
                    <div style = {{
                        marginLeft: '5px',
                        marginTop: '25px',
                        width: '150px',

                    }}>{this.state.message}</div>
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
                                    ipcRenderer.send('pause',{StartTime: this.props.StartTime})
                                    this.setState({
                                        ifPause: 1,
                                    })
                                }else{
                                    ipcRenderer.send('resume',{StartTime: this.props.StartTime})
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
                                ipcRenderer.send('cancel',{StartTime: this.props.StartTime})
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