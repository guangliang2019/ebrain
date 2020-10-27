import React from 'react'
import LogoZone from './LogoZone.jsx'
import { Input, Tooltip, Avatar, Badge, Button } from 'antd';
import { SettingOutlined, InfoCircleOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import UserMenu from './UserMenu.jsx';

const style = {
    root: {
        background: '#FFFFFF',
        width: '100vw',
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // position: 'fixed', zIndex: 1,
        '&:hover > $button': {
            color: 'blue'
        },
    },
    divider: {
        background: '#D9D9D9',
        width: '1px',
        height: '24px',
        marginLeft: '16px',
        marginRight: '16px',
    },
}

class NavBar extends React.Component {
    render() {
        return (
            <div style={style.root}>
                <LogoZone />
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Input
                        placeholder="在Ebrain内搜索"
                        bordered={false}
                        prefix={<SearchOutlined
                            style={{ marginRight: '8px' }}
                        />}
                        style={{
                            color: '#BFBFBF',
                            fontSize: 24,
                            width: '200px',
                            marginLeft: '8px'
                        }}

                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Button
                            className="button"
                            style={{
                                border: 'none'
                            }}
                            shape="circle"
                            icon={<SettingOutlined
                                className="button"
                                style={{
                                    marginTop: 2,
                                    fontSize: '24px',
                                    color: '#BFBFBF',
                                    '&:hover > $button': {
                                        color: '#FFFFFF'
                                    },
                                }}
                            />} />

                        <div style={style.divider} />
                        <UserMenu />
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar