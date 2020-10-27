import React from 'react'
import { Menu, Dropdown, message, Badge, Avatar } from 'antd';
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

class UserMenu extends React.Component {
    render() {
        return (
            <div style={{ marginRight: '16px' }}>
                <Dropdown

                    overlay={menu}>
                    <a style={{ color: '#595959' }} onClick={e => e.preventDefault()}>
                        User_Name <CaretDownOutlined />
                    </a>
                </Dropdown>
                <span className="avatar-item" style={{ marginRight: '4px', marginLeft: '16px' }}>
                    <Badge size="small" offset={[-4, 4]} count={1}>
                        <Avatar
                            size="large"
                            icon={<UserOutlined />}
                            style={{
                                background: '#B6D1FF'
                            }}
                        />
                    </Badge>
                </span>
            </div>
        )
    }
}

export default UserMenu