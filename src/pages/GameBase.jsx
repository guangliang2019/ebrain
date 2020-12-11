import { Card } from 'antd'
import React from 'react'
import Icon from '@ant-design/icons';

import { Typography } from 'antd';
import GameCard from '../components/GameCard';


const { Title } = Typography;


const style = {
    root: {
        width: '920px',
        background: '#F5F7FA',
        height: 'auto',
        padding: '0px 13px 0px 36px'
    },
    game: {
        width: '267px',
        height: '229px',
        marginTop: '16px',
        marginRight: '23px',
        //border: '.5px solid #E9E9E9',
    },
    divider: {
        width: '100%',
        height: '.5px',
        background: '#D9D9D9',
        marginTop: '48px',
        marginBottom: '24px',
        marginRight: '23px',
    }
}

const GamesSvg = () => (<svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>游戏</title>
    <g id="主界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="桌面端-HD" transform="translate(-240.000000, -125.000000)">
            <g id="main" transform="translate(200.000000, 80.000000)">
                <g id="最新" transform="translate(36.000000, 41.000000)" fill-rule="nonzero">
                    <g id="play-station">
                        <rect id="矩形" fill="#FFFFFF" opacity="0" x="0" y="0" width="32" height="32"></rect>
                        <path d="M13.0496875,6.9521875 L13.0496875,13.0459375 L6.9559375,13.0459375 L6.9559375,6.9521875 L13.0496875,6.9521875 M15.0496875,4.9521875 L4.9559375,4.9521875 L4.9559375,15.0459375 L15.0496875,15.0459375 L15.0496875,4.9521875 Z M22.004375,8.28125 L24.754375,13.0465625 L19.2528125,13.0465625 L22.0028125,8.28125 M22.0028125,4.28125 L15.78875,15.0475 L28.21875,15.0475 L22.004375,4.28125 L22.0028125,4.28125 Z M22.004375,18.5362366 C23.6550242,18.5363734 25.0757301,19.7024688 25.3976695,21.3214183 C25.7196089,22.9403679 24.8531204,24.5612878 23.3280993,25.1929153 C21.8030782,25.8245429 20.0442488,25.2909672 19.1272116,23.918493 C18.2101743,22.5460189 18.3903276,20.7168856 19.5575,19.5496875 C20.205029,18.898621 21.0861295,18.5336901 22.004375,18.5362366 M22.004375,16.53625 C19.7958279,16.5361236 17.8046841,17.8664397 16.9594513,19.906847 C16.1142186,21.9472543 16.5813599,24.2959078 18.1430385,25.8575865 C19.7047172,27.4192651 22.0533707,27.8864064 24.093778,27.0411737 C26.1341853,26.1959409 27.4645014,24.2047971 27.464375,21.99625 C27.4642024,18.9808467 25.0197783,16.5364226 22.004375,16.53625 Z M13.66375,17.0528125 L10.001875,20.7146875 L6.34,17.0528125 L5.0584375,18.334375 L8.7203125,21.99625 L5.0584375,25.6584375 L6.34,26.94 L10.001875,23.278125 L13.66375,26.94 L14.945625,25.6584375 L11.2834375,21.99625 L14.945625,18.334375 L13.66375,17.0528125 Z" id="形状" fill="#597EF7"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)


class GameBase extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <div style={{ width: '100%' }}>
                        <Title level={4} style={{
                            display: 'flex',
                            margin: '44px 0px 0px 0px',
                            alignItems: 'center',
                            color: '#030852'
                        }}>
                            <Icon
                                style={{ marginRight: '8px' }}
                                component={GamesSvg} />
                            最新研制
                        </Title>
                    </div>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <div style={style.divider}></div>
                    <div style={{ width: '100%' }}>
                        <Title level={4} style={{
                            display: 'flex',
                            margin: '44px 0px 0px 0px',
                            alignItems: 'center',
                            color: '#030852'
                        }}>
                            <Icon
                                style={{ marginRight: '8px' }}
                                component={GamesSvg} />
                            全部游戏
                        </Title>
                    </div>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
                <div style={{
                    height: '30vh'
                }} />
            </div>
        )
    }
}

export default GameBase