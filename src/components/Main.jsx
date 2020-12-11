import { Card } from 'antd'
import React from 'react'
import Icon from '@ant-design/icons';

import { Typography } from 'antd';
import GameBase from '../pages/GameBase';
import Home from '../pages/Home';
import Report from '../pages/Report';
import { Route, Link } from 'react-router-dom'

const { Title } = Typography;


const style = {
    root: {
        width: '920px',
        background: '#F5F7FA',
        height: '943px',
        //padding: '0px 13px 0px 36px'
    },
}



class Main extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <Route path="/Home" component={Home} />
                <Route path="/GameBase" component={GameBase} />
                <Route path="/Report" component={Report} />
                {/* <GameBase /> */}
            </div>
        )
    }
}

export default Main