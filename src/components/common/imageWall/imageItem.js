import React from 'react';
import { Image, Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import cancel from '../../../imgs/cancel.png';
import Icon from '@ant-design/icons';

export default class ImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibiblity: 'hidden',
    };
  }

  HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d={cancel} />
    </svg>
  );

  render() {
    const { Text } = Typography;
    return (
      <div
        style={{ width: 105, borderRadius: 15 }}
        onMouseOver={() => {
          console.log(this);
          this.setState({ visibiblity: 'visible' });
        }}
        onMouseOut={() => {
          console.log(this);
          this.setState({ visibiblity: 'hidden' });
        }}
      >
        <div style={{ backgroundColor: '#ff0000' }}>
          <Image
            width={105}
            src={this.props.file}
            style={{ borderRadius: 5, position: 'absolute', top: -40 }}
          />
          <div
            style={{
              textAlign: 'right',
              zIndex: 1,
              position: 'relative',
              top: -46,
            }}
          >
            <Button
              danger
              type="primary"
              size={5}
              icon={
                <img
                  src={cancel}
                  style={{
                    position: 'relative',
                    width: 18,
                    height: 18,
                    top: -5,
                  }}
                />
              }
              style={{
                borderRadius: 5,
                backgroundColor: 'rgba(0,0,0,0.53)',
                borderColor: '#00000000',
                width: 25,
                height: 25,
                visibility: this.state.visibiblity,
              }}
            ></Button>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <Text type="secondary">{this.props.name}</Text>
        </div>
      </div>
    );
  }
}
