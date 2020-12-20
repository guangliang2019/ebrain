import { Card, } from 'antd'
import React from 'react'

const { Meta } = Card;



const style = {
    root: {
        width: '267px',
        height: '229px',
        marginTop: '16px',
        marginRight: '23px',
    }
}

class GameCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Card
                hoverable
                style={style.root}
                cover={
                    <img
                        style={{
                            height: 135
                        }}
                        alt="example"
                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1730391253,3069033555&fm=26&gp=0.jpg"
                    />
                }
            // actions={[
            //     <SettingOutlined key="setting" />,
            //     <EditOutlined key="edit" />,
            //     <EllipsisOutlined key="ellipsis" />,
            // ]}
            >
                <Meta title={this.props.title} description="注意力/抑制力/空间感知" />
            </Card>
        )
    }
}
export default GameCard