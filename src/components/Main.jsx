import { Card } from 'antd'
import React from 'react'
import Icon from '@ant-design/icons';

import { Typography } from 'antd';
import GameBase from '../pages/GameBase';

const { Title } = Typography;


const style = {
    root: {
        width: '920px',
        background: '#F5F7FA',
        //height: '2000px',
        padding: '0px 13px 0px 36px'
    },
}



class Main extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <GameBase />
            </div>
        )
    }
}

export default Main