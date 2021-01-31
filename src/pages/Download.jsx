import React from 'react'
import Downloading from '../components/Downloading.jsx'
import {Button} from 'antd'
import {CaretRightOutlined,PauseOutlined} from '@ant-design/icons'
import { connect } from 'react-redux'

const {ipcRenderer} = window.require('electron')
let path = ''
let lastpath = ''

class Download extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            downloadPath: this.props.download.downloadPath,
        }
    }
    componentDidMount() {
        let ifUpdate = setInterval(() => {
            ipcRenderer.on('downloadPath',(event,args) => {
                path = args
            })
            if(path){
                this.props.updatedownloadPath(path)
                this.setState({
                    downloadPath: path,
                })
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
                        下载目录：<button onClick  = {Update}>{this.state.downloadPath}</button>     
                    </div>
                </div>
                <div>
                    <Downloading />
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
        updatedownloadPath: (downloadPath) => {
            dispatch({
                type: 'UPDATE_DOWNLOAD',
                data: { downloadPath: downloadPath }
            })
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)