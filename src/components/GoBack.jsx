import React from 'react'
import { Button } from 'antd';
import Icon, { ReloadOutlined } from '@ant-design/icons';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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
}

class GoBack extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={style.root}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '72%'
                }}>
                    <Button
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                        }}
                        icon={<LeftOutlined />}
                        size='large'
                    />
                    <Button
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                        }}
                        icon={<RightOutlined />}
                        size='large'
                    />
                    <Button
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                        }}
                        icon={<ReloadOutlined />}
                        size='large'
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateGamekey: (newKey) => {
            dispatch({
                type: 'UPDATE_GAMEKEY',
                data: { newKey: newKey }
            })
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GoBack)