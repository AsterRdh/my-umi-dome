
import { Button , Typography , Switch, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import BasicLayout  from '@ant-design/pro-layout';
import ProLayout, {
  PageContainer,
  SettingDrawer,
  ProSettings,
  // eslint-disable-next-line import/no-unresolved
} from '@ant-design/pro-layout';
import Logo from '../imgs/iknow.png'
import React, { useState } from 'react';
import defaultProps from './_defaultProps'
import Roster from '../components/Roster'
import { MenuFoldOutlined, MenuUnfoldOutlined , UserOutlined , BellOutlined  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Welcome from "./welcome";

export default class staffroster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: '/welcome',
      collapsed: false,
      insidePage:<Welcome/>,
    };
  }

  render() {
    const { Content } = Layout;
    const { Text } = Typography;
    const setPathname = '/welcome';
    const  setCollapsed = false;
    return (
      <div>
        <div>
          <ProLayout
            {...defaultProps}
            title={"吾立知HR系统"}
            logo={Logo}
            fixSiderbar
            collapsed={this.state.collapsed}
            collapsedButtonRender={false}
            headerContentRender={() => {
              return (
                <div
                  onClick={() => this.setState({
                    collapsed:!this.state.collapsed
                  })}
                  style={{
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  {this.state.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </div>
              );
            }}
            rightContentRender={() => (
              <div>
                <Button type="link" style={{color: '#000000'}}>意见反馈</Button>
                <BellOutlined style={{height: 30, width: 30, marginRight: 15}}/>
                <Avatar shape="square" size="small" icon={<UserOutlined/>}/>
                <Text style={{marginLeft: 8, marginRight: 20}}>用户名</Text>
              </div>
            )}
            menuItemRender={(item, dom) => (
              <ab
                onClick={() => {
                  console.log(item)
                  this.setState({
                    insidePage:item.component
                  }
                );
                }}
              >
                {dom}
              </ab>
            )}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 10,
                minHeight: 280,
                backgroundColor: '#ffffff'
              }}
            >
              {this.state.insidePage}
            </Content>

          </ProLayout>
        </div>
      </div>
    );
  }




};
