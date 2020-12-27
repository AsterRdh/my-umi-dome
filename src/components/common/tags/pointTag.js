import React from 'react';
import { Space } from 'antd';
export default class PointTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '无',
      color: '#bcbcbc',
    };

    switch (props.tag) {
      case 0:
        this.state = {
          text: '无',
          color: '#bcbcbc',
        };
        break;
      case 1:
        this.state = {
          text: '待定',
          color: '#fba220',
        };
        break;
      case 2:
        this.state = {
          text: '通过',
          color: '#65bf29',
        };
        break;
      case 3:
        this.state = {
          text: '未通过',
          color: '#fa223a',
        };
        break;
    }
  }
  render() {
    return (
      <Space align="center">
        <div
          style={{
            backgroundColor: this.state.color,
            float: 'left',
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
        ></div>
        <div style={{ float: 'left' }}>{this.state.text}</div>
      </Space>
    );
  }
}
