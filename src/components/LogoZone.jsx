import React from 'react'

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
        margin: '0px'
    }

}

class LogoZone extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <p style={style.ebrain}>Ebrain</p>
            </div >
        )
    }
}

export default LogoZone