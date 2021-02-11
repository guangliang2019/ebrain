import React from 'react'
import { Typography, Button } from 'antd';
import TrainAbility from '../components/TrainAbility.jsx'
import { DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const {ipcRenderer} = window.require('electron')

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}



class GameDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div style={styles.root}>
                <div style={{ width: '851px', height: '360px', display: 'flex', flexDirection: 'column', backgroundColor: '#FFF' }}>
                    <img
                        alt="test"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        width="851px"
                        height="280px"
                    />
                    <Button style={{ marginTop: '16px', marginLeft: '17px', width: '152px', height: '48px', borderRadius: '3px' }} 
                    type="primary" 
                    icon={<DownloadOutlined />}
                    onClick={()=>{
                        this.props.addifDone()
                        var a = "H:\\MC\\呜！苦路西！Beta1.1.zip"
                        ipcRenderer.send('download',a + "+" + localStorage.getItem('download'))
                    }}>安装</Button>
                </div>
                <div style={{ width: '851px', display: 'flex', flexDirection: 'column', marginTop: '32px', marginLeft: '34px', }}>
                    <div style={{ display: 'flex', alignItems: 'center',fontSize:'20px',color:'#030852',fontWeight:'bold',marginBottom:'20px'}}>
                        <InfoCircleOutlined style={{ fontSize: '28px' }} />&nbsp;&nbsp;游戏介绍：{this.props.gameStatus.gamekey}
                    </div>
                    <div>
                        斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一斯国一
                    </div>
                </div>
                <div style={{ width: '851px', display: 'flex', flexDirection: 'column', marginTop: '32px', marginLeft: '34px', }}>
                    <div style={{ display: 'flex', alignItems: 'center',fontSize:'20px',color:'#030852',fontWeight:'bold',marginBottom:'20px'}}>
                        <InfoCircleOutlined style={{ fontSize: '28px' }} />&nbsp;&nbsp;训练的能力
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <TrainAbility></TrainAbility>
                        <TrainAbility></TrainAbility>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateGamekey: (newKey) => {
            dispatch({
                type: 'UPDATE_GAMEKEY',
                data: { newKey: newKey }
            })
        },
        addifDone: () => {
            dispatch({
                type: 'ADD_IFDONE',
            })
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail)