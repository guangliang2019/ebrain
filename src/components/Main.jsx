import { Card } from 'antd'
import React from 'react'

const style = {
    root: {
        width: '920px',
        background: '#F5F7FA',
        height: '2000px',
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

class Main extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',


                }}>
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <Card hoverable style={style.game} />
                    <div style={style.divider}></div>
                </div>

            </div>
        )
    }
}

export default Main