import { Button, Typography, Avatar } from 'antd';
import BasicLayout from '@ant-design/pro-layout';
import ProLayout, {
  PageContainer,
  SettingDrawer,
  ProSettings,
  // eslint-disable-next-line import/no-unresolved
} from '@ant-design/pro-layout';
import Logo from '../imgs/iknow.png';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';
import Roster from '../components/Roster';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Welcome from './welcome';

import { history, Link } from 'umi';

export default class staffroster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: '/welcome',
      collapsed: false,
      insidePage: <Welcome />,
      defaultProps: defaultProps,
    };
  }

  render() {
    const { Content } = Layout;
    const { Text } = Typography;
    const setPathname = '/welcome';
    const setCollapsed = false;
    return (
      <div>
        <div>
          <ProLayout
            {...this.state.defaultProps}
            title={'吾立知HR系统'}
            logo={Logo}
            fixSiderbar
            collapsed={this.state.collapsed}
            collapsedButtonRender={false}
            headerContentRender={() => {
              return (
                <div
                  onClick={() =>
                    this.setState({
                      collapsed: !this.state.collapsed,
                    })
                  }
                  style={{
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  {this.state.collapsed ? (
                    <MenuUnfoldOutlined />
                  ) : (
                    <MenuFoldOutlined />
                  )}
                </div>
              );
            }}
            rightContentRender={() => (
              <div>
                <Button type="link" style={{ color: '#000000' }}>
                  意见反馈
                </Button>
                <BellOutlined
                  style={{ height: 30, width: 30, marginRight: 15 }}
                />
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
                <Text style={{ marginLeft: 8, marginRight: 20 }}>用户名</Text>
              </div>
            )}
            menuItemRender={(item, dom) => (
              <a
                onClick={() => {
                  history.push(item.component);
                  let defaultProps1 = this.state.defaultProps;
                  defaultProps1.location.pathname = item.path;
                  console.log(item.path);
                  console.log(defaultProps1.location);
                  this.setState({
                    insidePage: item.component,
                    defaultProps: defaultProps1,
                  });
                }}
              >
                {dom}
              </a>
            )}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 10,
                minHeight: 280,
                backgroundColor: '#f0f2f5',
              }}
            >
              {this.props.children}
            </Content>
          </ProLayout>
        </div>
      </div>
    );
  }
}
