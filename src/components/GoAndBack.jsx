import { Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { ReloadOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
const style = {
    root: {
        background: '#FFFFFF',
        width: '200px',
        minWidth: '200px',
        maxHeight: '80px',
        height: '80px',
        borderRight: '1px solid #D9D9D9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingLeft: '24px',
        paddingRight: '24px',
    },
}


class GoAndBack extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.updateStackBack(1, window.location.pathname) //页面变化的时候压入back栈
        }
    }
    render() {
        return (
            <div style={style.root}>
                <Button
                    icon={<ArrowLeftOutlined />}
                    size={"large"}
                    style={{ border: 'none' }}
                    onClick={() => {
                        //console.log('当前页面的url', window.location.pathname)
                        var pathnow = this.props.browser.stackBack.pop()
                        this.props.updateStackGo(1, pathnow)//把当前浏览页面压入go（供前进使用
                        this.props.history.push(this.props.browser.stackBack.pop()) //跳转（这里又弹出了一次，把退回后的路径也弹出了  但是上面监测路径的生命周期函数又给压入了 所以么的问题
                    }}
                ></Button>
                <Button

                    icon={<ArrowRightOutlined />}
                    size={"large"}
                    style={{ border: 'none' }}
                    onClick={() => {
                        //console.log('当前页面的url', window.location.pathname)
                        this.props.history.push(this.props.browser.stackGo.pop()) //跳转，把go里面的路径弹出 在上面会压入back
                    }}
                ></Button>
                <Button
                    icon={<ReloadOutlined />}
                    size={"large"}
                    style={{ border: 'none' }}
                    onClick={() => {
                        //console.log('stackGo：', this.props.browser.stackGo)
                        //console.log('stackBack：', this.props.browser.stackBack)
                    }}></Button>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        //type 1是push 2是pop
        updateStackGo: (updatetype, value) => {
            dispatch({
                type: 'UPDATE_STACK_GO',
                data: { updatetype: updatetype, value: value }
            })
        },
        updateStackBack: (updatetype, value) => {
            dispatch({
                type: 'UPDATE_STACK_BACK',
                data: { updatetype: updatetype, value: value }
            })
        },
    };
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoAndBack))