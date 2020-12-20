import React from 'react';
import { Button,Switch, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export default class Roster extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}
