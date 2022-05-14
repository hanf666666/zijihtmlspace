import { Component } from "react";

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class FrameOut extends Component {
  render() {//公共部分页面
    return (
      <div>
        <Layout style = {{ minHeight: "630px" , color:"white" }} >
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2'] }>
              <h1 style={{color:"white"}}>家庭管理系统</h1>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<HomeOutlined  />} title="subnav 1">
                  <Menu.Item key="1"><SmileOutlined />option1</Menu.Item>
                  <Menu.Item key="2"><SmileOutlined />option2</Menu.Item>
                  <Menu.Item key="3"><SmileOutlined />option3</Menu.Item>
                  <Menu.Item key="4"><SmileOutlined />option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<SmileOutlined rotate={180} />} title="subnav 2">
                  <Menu.Item key="5"><SettingFilled />option5</Menu.Item>
                  <Menu.Item key="6"><SettingFilled />option6</Menu.Item>
                  <Menu.Item key="7"><SettingFilled />option7</Menu.Item>
                  <Menu.Item key="8"><SettingFilled />option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9"><SyncOutlined spin />option9</Menu.Item>
                  <Menu.Item key="10"><SyncOutlined spin />option10</Menu.Item>
                  <Menu.Item key="11"><SyncOutlined spin />option11</Menu.Item>
                  <Menu.Item key="12"><SyncOutlined spin />option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' , minHeight: "100%" }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
              {/* {
                console.log(this.props.children)
              } */}
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default FrameOut;