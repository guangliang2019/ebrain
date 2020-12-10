import React from 'react'
import Icon from '@ant-design/icons';

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
        justifyContent: 'center',
    },
    ebrain: {
        width: '69px',
        height: '33px',
        fontSize: '24px',
        fontFamily: 'STBaoliTC-Regular, STBaoliTC',
        fontWeight: 400,
        color: '#595959',
        lineHeight: '33px',
        margin: '-4px 0px 0px 0px'
    }

}

const LogoSvg = () => (
    <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>简易logo</title>
        <g id="主界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="桌面端-HD" transform="translate(-35.000000, -24.000000)">
                <g id="LOGOzone">
                    <rect id="LOGObg" fill="#FFFFFF" x="0" y="0" width="200" height="80"></rect>
                    <g id="简易logo" transform="translate(35.000000, 24.000000)" fill="#597EF7">
                        <path d="M18.5,0 L27.5,0 L32,8 L27.5,16 L18.5,16 L14,8 L18.5,0 Z M19.1741039,2.88380357 L15.7864949,8.87008198 L19.1488859,14.841432 L25.8988859,14.8265036 L29.2864949,8.84022523 L25.9241039,2.86887519 L19.1741039,2.88380357 Z" id="形状"></path>
                        <path d="M18.5,16 L27.5,16 L32,24 L27.5,32 L18.5,32 L14,24 L18.5,16 Z M19.1364838,17.2459942 L15.7488748,23.2322726 L19.1112658,29.2036226 L25.8612658,29.1886943 L29.2488748,23.2024158 L25.8864838,17.2310658 L19.1364838,17.2459942 Z" id="形状"></path>
                        <path d="M4.5,8 L13.5,8 L18,16 L13.5,24 L4.5,24 L0,16 L4.5,8 Z M6.53504764,9.96890977 L3.14743867,15.9551882 L6.5098297,21.9265382 L13.2598297,21.9116098 L16.6474387,15.9253314 L13.2850476,9.95398139 L6.53504764,9.96890977 Z" id="形状"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

class LogoZone extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <Icon component={LogoSvg}
                    style={{
                        marginLeft: '-4px',
                        marginRight: '12px'
                    }} />
                <p style={style.ebrain}>Ebrain</p>
            </div >
        )
    }
}

export default LogoZone