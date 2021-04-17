import React from 'react'

import GameBase from '../pages/GameBase';
import Home from '../pages/Home';
import Report from '../pages/Report';
import Test from '../pages/Test';
import { Route } from 'react-router-dom'
import GameDetail from '../pages/GameDetail'
import Download from '../pages/Download'


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
                <Route  exact path="/GameBase" component={GameBase} />
                <Route path="/Report" component={Report} />
                <Route path="/Test" component={Test} />
                <Route path="/GameBase/Detail/:id" component={GameDetail} />
                <Route path="/Download" component={Download} />
                {/* <GameBase /> */}
            </div>
        )
    }
}

export default Main