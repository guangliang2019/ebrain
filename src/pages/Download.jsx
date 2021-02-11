import React from 'react'
import Downloading from '../components/Downloading.jsx'
import {Button} from 'antd'
import {CaretRightOutlined,PauseOutlined} from '@ant-design/icons'
import {connect} from 'react-redux'

const {ipcRenderer} = window.require('electron')
let path = ''
let downloadItem = []
let num = 0
let ifUpdate

ipcRenderer.on('new-download-item',(event,item) => {
    localStorage.setItem(num.toFixed(),item.startTime)
    downloadItem.push(
    <Downloading
    style = {{
        marginTop: 30,
    }}
    id = {num}
    key = {num}
    StartTime = {item.startTime}
    TotalBytes = {item.totalBytes}
    ReceivedBytes = {item.receivedBytes}
    FileName = {item.filename}
    />)
    num += 1
})

class Download extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontcolor: '',
            downloadpath: '',
        }
    }
    componentDidMount() {
        ifUpdate = setInterval(() => {
            ipcRenderer.on('downloadPath',(event,args) => {
                path = args
            })
            if(path){
                localStorage.setItem('download',path)
            }
            if(localStorage.getItem('download') === null){
                localStorage.setItem('download','C:\\')
            }
            this.setState({
                downloadpath: localStorage.getItem('download')
            })
        },500)
    }
    componentWillUnmount() {
        clearInterval(ifUpdate)
        this.setState = function(){
            return null
        }
    }
    render() {
        const Update = () => {
            ipcRenderer.send('dialog','')
        }
        return (
            <>
                <div style = {{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Button
                        className="button"
                        style={{
                            height: '30px',
                            marginTop: 10,
                            justifyContent: 'center',
                            marginLeft: '400px',
                            display: 'flex',
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}
                        onClick = {() => {
                            this.props.updatedownloadState(0)
                            ipcRenderer.send('AllResume')
                        }}
                        icon={<CaretRightOutlined
                            className="button"
                            style={{
                                boxShadow:'none',
                                fontSize: '24px',
                                color: 'black',
                            }}
                        />}>
                        全部开始
                    </Button>
                    <Button
                        className="button"
                        style={{
                            height: '30px',
                            marginTop: 10,
                            marginLeft: 10,
                            justifyContent: 'center',
                            display: 'flex',
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}
                        onClick = {() => {
                            this.props.updatedownloadState(1)
                            ipcRenderer.send('AllPause')
                        }}
                        icon={<PauseOutlined
                            className="button"
                            style={{
                                boxShadow:'none',
                                fontSize: '24px',
                                color: 'black',
                                '&:hover > $button': {
                                    color: '#FFFFFF'
                                },
                            }}
                        />}>
                        全部暂停
                    </Button>
                    <div style = {{
                        marginLeft: 50,
                        marginTop: '14px',
                    }}>
                        下载目录：
                        <text
                        style = {{
                            cursor: 'pointer',
                            color: this.state.fontcolor,
                        }} 
                        onClick = {Update}
                        onMouseEnter = {() => {
                            this.setState({
                                fontcolor: 'blue'
                            })
                        }}
                        onMouseOut = {() => {
                            this.setState({
                                fontcolor: 'black'
                            })
                        }}
                        ><u>{localStorage.getItem('download')}</u></text>     
                    </div>
                </div>
                <div>
                    {downloadItem}
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
        updatedownloadState: (newState) => {
            dispatch({
                type: 'UPDATE_DOWNLOAD',
                data: { AllPause: newState }
            })
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)