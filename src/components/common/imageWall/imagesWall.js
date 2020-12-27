import React from 'react';
import { Image } from 'antd';
import { Upload, Modal, Space, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ImageItem from './imageItem';

export default class ImagesWall extends React.Component {
  bhandleCancel = () => this.setState({ previewVisible: false });
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  constructor(props) {
    const { Text } = Typography;
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [],
    };
  }
  render() {
    const { Text } = Typography;
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div style={{ borderRadius: 5 }}>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>点击上传</div>
      </div>
    );
    return (
      <div>
        <Space>
          <Image.PreviewGroup>
            <ImageItem
              file={
                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
              }
              name={'123'}
            />
          </Image.PreviewGroup>
          <div style={{ textAlign: 'center' }}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onPreview={this.handlePreview}
              listType="picture-card"
              onChange={this.handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>

            <Text type="secondary">图片5M以内 </Text>
          </div>

          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </Space>
      </div>
    );
  }
}
