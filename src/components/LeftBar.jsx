import React from 'react'
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const TestSVG = () =>
    (<svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" >
        <g id="主界面" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="桌面端-HD" transform="translate(-39.000000, -266.000000)">
                <g id="leftBar" transform="translate(-2.000000, 80.000000)">
                    <g id="icon_leftbar_test" transform="translate(37.000000, 183.000000)" fill="#FFFFFF" fillRule="nonzero">
                        <path d="M25.48125,5.615625 L22.271875,5.615625 C21.878125,4.66875 20.94375,4 19.85625,4 L12.15625,3.99375 C11.065625,3.99375 10.13125,4.665625 9.740625,5.615625 L6.53125,5.615625 C5.1375,5.615625 4.00625,6.746875 4.00625,8.140625 L4.00625,25.45 C4.00625,26.84375 5.1375,27.975 6.53125,27.975 L25.484375,27.975 C26.878125,27.975 28.009375,26.84375 28.009375,25.45 L28.009375,8.140625 C28.009375,6.746875 26.878125,5.615625 25.48125,5.615625 Z M12.15625,6.11875 L19.85625,6.125 C20.125,6.125 20.34375,6.34375 20.34375,6.6125 C20.34375,6.88125 20.125,7.1 19.85625,7.1 L12.15625,7.09375 C11.8875,7.09375 11.66875,6.875 11.66875,6.60625 C11.66875,6.3375 11.8875,6.11875 12.15625,6.11875 Z M25.821875,24.978125 C25.821875,25.425 25.459375,25.7875 25.0125,25.7875 L7,25.7875 C6.553125,25.7875 6.190625,25.425 6.190625,24.978125 L6.190625,8.6125 C6.190625,8.165625 6.553125,7.803125 7,7.803125 L9.834375,7.803125 C10.26875,8.64375 11.146875,9.21875 12.15625,9.21875 L19.85625,9.225 C20.86875,9.225 21.746875,8.646875 22.18125,7.803125 L25.0125,7.803125 C25.459375,7.803125 25.821875,8.165625 25.821875,8.6125 L25.821875,24.978125 Z" id="形状" ></path>
                        <path d="M12.021875,15.415625 L9.425,15.415625 C8.821875,15.415625 8.33125,14.925 8.33125,14.321875 C8.33125,13.71875 8.821875,13.228125 9.425,13.228125 L12.021875,13.228125 C12.625,13.228125 13.115625,13.71875 13.115625,14.321875 C13.115625,14.925 12.625,15.415625 12.021875,15.415625 L12.021875,15.415625 Z M22.590625,15.415625 L15.496875,15.415625 C14.89375,15.415625 14.403125,14.925 14.403125,14.321875 C14.403125,13.71875 14.89375,13.228125 15.496875,13.228125 L22.5875,13.228125 C23.190625,13.228125 23.68125,13.71875 23.68125,14.321875 C23.68125,14.925 23.19375,15.415625 22.590625,15.415625 Z M22.63125,20.90625 L9.38125,20.90625 C8.8,20.90625 8.328125,20.415625 8.328125,19.8125 C8.328125,19.209375 8.8,18.71875 9.38125,18.71875 L22.63125,18.71875 C23.2125,18.71875 23.684375,19.209375 23.684375,19.8125 C23.684375,20.415625 23.2125,20.90625 22.63125,20.90625 Z" id="形状"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>)

const GameSVG = () => (<svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>游戏</title>
    <g id="主界面" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="桌面端-HD" transform="translate(-240.000000, -125.000000)">
            <g id="main" transform="translate(200.000000, 80.000000)">
                <g id="最新" transform="translate(36.000000, 41.000000)" fillRule="nonzero">
                    <g id="play-station">
                        <rect id="矩形" fill="#FFFFFF" opacity="0" x="0" y="0" width="32" height="32"></rect>
                        <path d="M13.0496875,6.9521875 L13.0496875,13.0459375 L6.9559375,13.0459375 L6.9559375,6.9521875 L13.0496875,6.9521875 M15.0496875,4.9521875 L4.9559375,4.9521875 L4.9559375,15.0459375 L15.0496875,15.0459375 L15.0496875,4.9521875 Z M22.004375,8.28125 L24.754375,13.0465625 L19.2528125,13.0465625 L22.0028125,8.28125 M22.0028125,4.28125 L15.78875,15.0475 L28.21875,15.0475 L22.004375,4.28125 L22.0028125,4.28125 Z M22.004375,18.5362366 C23.6550242,18.5363734 25.0757301,19.7024688 25.3976695,21.3214183 C25.7196089,22.9403679 24.8531204,24.5612878 23.3280993,25.1929153 C21.8030782,25.8245429 20.0442488,25.2909672 19.1272116,23.918493 C18.2101743,22.5460189 18.3903276,20.7168856 19.5575,19.5496875 C20.205029,18.898621 21.0861295,18.5336901 22.004375,18.5362366 M22.004375,16.53625 C19.7958279,16.5361236 17.8046841,17.8664397 16.9594513,19.906847 C16.1142186,21.9472543 16.5813599,24.2959078 18.1430385,25.8575865 C19.7047172,27.4192651 22.0533707,27.8864064 24.093778,27.0411737 C26.1341853,26.1959409 27.4645014,24.2047971 27.464375,21.99625 C27.4642024,18.9808467 25.0197783,16.5364226 22.004375,16.53625 Z M13.66375,17.0528125 L10.001875,20.7146875 L6.34,17.0528125 L5.0584375,18.334375 L8.7203125,21.99625 L5.0584375,25.6584375 L6.34,26.94 L10.001875,23.278125 L13.66375,26.94 L14.945625,25.6584375 L11.2834375,21.99625 L14.945625,18.334375 L13.66375,17.0528125 Z" id="形状" fill="#FFFFFF"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)



const style = {
    root: {
        width: '200px',
        height: '944px',
        background: 'rgba(10, 25, 39, 0.95)',
        // position: 'fixed', zIndex: 1,
        // top: '80px'
    },
    menuItem: {
        display: 'flex',
        margin: '0px',
        height: '80px',
        alignItems: 'center',
        fontSize: '18px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
    }

}

class LeftBar extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextProps) { //这里是尝试在路由改变的时候强制刷新组件  但是不好使
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.forceUpdate();
        }
    }
    render() {
        return (
            <div style={style.root}>
                <Menu
                    theme={'dark'}
                    style={{
                        width: 200,
                        backgroundColor: 'transparent'
                    }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item
                        key="sub1"
                        icon={<HomeOutlined style={{
                            fontSize: '22px',
                            marginRight: '16px',
                            marginLeft: '12px'
                        }} />}
                        title="Navigation One"
                        style={style.menuItem}
                    >
                        <Link to="/Home">
                            主页
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="sub2"
                        icon={<Icon
                            component={GameSVG}
                            style={{
                                fontSize: '22px',
                                marginRight: '16px',
                                marginLeft: '12px',
                                color: 'inherit'
                            }} />}
                        title="Navigation One"
                        style={style.menuItem}
                    >
                        <Link to="/GameBase">
                            游戏
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="sub3"
                        icon={<Icon
                            component={TestSVG}
                            style={{
                                fontSize: '22px',
                                marginRight: '16px',
                                marginLeft: '12px',
                                color: 'inherit'
                            }} />}
                        title="Navigation One"
                        style={style.menuItem}
                    >
                        <Link to="/Report">
                            报告
                        </Link>
                    </Menu.Item>
                </Menu>
                {/* <button onClick={()=>{
                    console.log('===',window.location.pathname)
                }}>test</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        //type 1是push 2是pop
        updateStackGo: (updatetype,value) => {
            dispatch({
                type: 'UPDATE_STACK_GO',
                data: { updatetype: updatetype, value: value }
            })
        },
        updateStackBack:(updatetype,value)=>{
            dispatch({
                type: 'UPDATE_STACK_BACK',
                data: { updatetype: updatetype, value: value }
            })
        },
    };
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftBar))