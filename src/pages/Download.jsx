import React from 'react'
import Downloading from '../components/Downloading.jsx'
import {Button} from 'antd'
import {CaretRightOutlined,PauseOutlined} from '@ant-design/icons'

const {ipcRenderer} = window.require('electron')
let path = 'C:\\'
let downloadItem = []

ipcRenderer.on('new-download-item',(event,item) => {
    downloadItem.push(
    <Downloading
    style = {{
        marginTop: 30,
    }}
    StartTime = {item.startTime}
    TotalBytes = {item.totalBytes}
    ReceivedBytes = {item.receivedBytes}
    FileName = {item.filename}
    />)
})

class Download extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontcolor: '',
        }
    }
    componentDidMount() {
        let ifUpdate = setInterval(() => {
            ipcRenderer.on('downloadPath',(event,args) => {
                path = args
            })
            if(path){
                if(localStorage.getItem('download') === null||path !== 'C:\\'){
                    localStorage.setItem('download',path)
                }
            }
        },500)
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
                        }}
                        icon={<CaretRightOutlined
                            className="button"
                            style={{
                                boxShadow:'none',
                                fontSize: '24px',
                                color: 'black',
                            }}
                        />}>
                        <text>全部开始</text>
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
                        <text>全部停止</text>
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

export default Download