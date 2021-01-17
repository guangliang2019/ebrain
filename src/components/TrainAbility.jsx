import React from 'react'
import {FrownOutlined} from  '@ant-design/icons';

const styles={
    root:{
        width:'380px',
        height:'64px',
        display:'flex',
        flexDirection:'row',
    },
    title:{
        fontSize:'18px',
        color:'#252525',
        fontWeight:'bold',
    },
    discription:{
        display:'flex',
        width:'285px',
        fontSize:'14px',
        color:'#252525',
    }
}

export default class TrainAbility extends React.Component{

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div style={styles.root}>
                <FrownOutlined style={{fontSize:'64px'}}/>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',
                width:'285px',height:'64px',marginLeft:'16px'}}>
                    <div style={styles.title}>TITLE</div>
                    <div style={styles.discription}>discription</div>
                </div>
            </div>
        )
    }
}