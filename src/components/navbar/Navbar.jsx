import React from 'react';
import logo from '../../assets/navlook.png'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './nav.css'
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="logo">
        <img class="avatar" src={logo} alt="logo" srcset="" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;