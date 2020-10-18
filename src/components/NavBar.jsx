import React from 'react'
import LogoZone from './LogoZone.jsx'

const style = {
    root: {
        background: '#FFFFFF',
        width: '100vw',
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
    },

}

class NavBar extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <LogoZone />
            </div>
        )
    }
}

export default NavBar