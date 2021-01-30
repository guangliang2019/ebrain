import React from 'react'
import Downloading from '../components/Downloading.jsx'
import {Button} from 'antd'
import {CaretRightOutlined,PauseOutlined} from '@ant-design/icons'

const {ipcRenderer,app} = window.require('electron')
class Download extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
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
                        下载目录：{}     
                    </div>
                </div>
                <div>
                    <Downloading />
                </div>
            </>
        )
    }
}

export default Download