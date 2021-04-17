import React from 'react'
import {Progress,Button} from 'antd'
import {CaretRightOutlined,PauseOutlined,DeleteOutlined} from '@ant-design/icons'
import {connect} from 'react-redux'

const {ipcRenderer} = window.require('electron')

class Downloading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receivedBytes: this.props.download.Done[this.props.id].ifDone === 1?this.props.TotalBytes:'',//已下载的字节数
            lastReceivedBytes: 0,//上一次接收的字节数
            downloadSpeed: '',//下载速度
            ifPause: 0,//该下载项目是否暂停
            ifDone: 0,//该下载项目是否完成
            lastPause: -1,//上一次的全局暂停状态
            message: this.props.download.Done[this.props.id].ifDone === 1?'已完成':'',//下载项目显示的信息
        }
    }
    componentDidMount(){
        let ReceivedBytes = ''
        let LastReceivedBytes = ''
        let downloadSpeed_temp = ''
        let downloadSpeed = ''
        let startTime_temp = ''
        let Message = ''
        let Pause = 0
        ipcRenderer.on('download-item-done',(event,item) => {
            if(localStorage.getItem(this.props.id.toFixed()) == item.startTime)/*判断item的下载时间是否与该下载项目相同*/{
                ReceivedBytes = this.props.TotalBytes
                this.props.updateifDone(this.props.id)
                this.setState({
                    ifDone: 1,
                    message: '已完成',
                    receivedBytes: ReceivedBytes,
                })
            }
        })
        let ifOver = setInterval(() => {
            ipcRenderer.on('download-item-updated',(event,item) => { 
                if(localStorage.getItem(this.props.id.toFixed()) == item.startTime){
                    startTime_temp = item.startTime
                    ReceivedBytes = item.receivedBytes
                    LastReceivedBytes = this.state.lastReceivedBytes
                    downloadSpeed_temp = ReceivedBytes - LastReceivedBytes
                    LastReceivedBytes = ReceivedBytes
                    //换算下载速度
                    downloadSpeed_temp = downloadSpeed_temp*2/(1024*1024)
                    if(downloadSpeed_temp < 1){
                        downloadSpeed_temp *= 1024
                        downloadSpeed = 'KB/s'
                        if(downloadSpeed_temp < 1){
                            downloadSpeed_temp *= 1024
                            downloadSpeed = 'b/s'
                        }
                    }else{
                        downloadSpeed = 'MB/s'
                    }
                }
            })
            if(this.props.download.Done[this.props.id].ifDone === 0){
                if(localStorage.getItem(this.props.id.toFixed()) == startTime_temp){
                    let ifChange = 0
                    if(this.state.ifDone === 0){
                        //判断Pause是否应该被全局更改
                        if(this.state.lastPause !== this.props.download.AllPause && this.props.download.AllPause !== -1){
                            console.log(this.props.id)
                            ifChange = 1
                            Pause = this.props.download.AllPause
                        }
                        else{
                            Pause = this.state.ifPause
                        }
                        //判断Pause的状态
                        if(Pause === 0){
                            Message = (downloadSpeed_temp/1).toFixed(2)+downloadSpeed
                        }
                        else{
                            Message = '已暂停'
                        }
                    }
                    if(ifChange === 0){
                        this.setState({
                            receivedBytes: ReceivedBytes,
                            lastreceivedBytes: LastReceivedBytes,
                            speed: downloadSpeed,
                            message: Message,
                            ifPause: Pause,
                        })
                    }
                    else{
                        this.setState({
                            receivedBytes: ReceivedBytes,
                            lastreceivedBytes: LastReceivedBytes,
                            speed: downloadSpeed,
                            message: Message,
                            ifPause: Pause,
                            lastPause: Pause,
                        })
                    }
                }
            }
        },500)
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
                                    this.props.updatedownloadState(-1)
                                    this.setState({
                                        ifPause: 1,
                                        lastPause: 1,
                                    })
                                }else{
                                    ipcRenderer.send('resume',{StartTime: this.props.StartTime})
                                    this.props.updatedownloadState(-1)
                                    this.setState({
                                        ifPause: 0,
                                        lastPause: 0,
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
                                if(this.state.ifDone === 0){
                                    ipcRenderer.send('cancel',{StartTime: this.props.StartTime})
                                }
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

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateifDone: (Index) => {
            dispatch({
                type: 'UPDATE_IFDONE',
                data: {Index: Index}
            })
        },
        updatedownloadState: (newState) => {
            dispatch({
                type: 'UPDATE_DOWNLOAD',
                data: { AllPause: newState }
            })
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Downloading)