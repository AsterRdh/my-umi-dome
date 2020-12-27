import React from 'react';
import ImagesWall from '../common/imageWall/imagesWall';
import { Row, Col } from 'antd';
import { styles } from '../../pages/rosterpage/constant/styles';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class ImagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [],
    };
  }
  render() {
    return (
      <div style={{ marginLeft: 50, marginRight: 50 }}>
        <Row align="middle" style={styles.cardRowStyle}>
          <Col span={12}>
            <div>
              其他身份证照片
              <ImagesWall />
            </div>
          </Col>
          <Col span={12}>
            <div>
              劳动合同
              <ImagesWall />
            </div>
          </Col>
        </Row>

        <Row align="middle" style={styles.cardRowStyle}>
          <Col span={12}>
            <div>
              入职体检单
              <ImagesWall />
            </div>
          </Col>
          <Col span={12}>
            <div>
              入职简历
              <ImagesWall />
            </div>
          </Col>
        </Row>

        <Row align="middle" style={styles.cardRowStyle}>
          <Col span={12}>
            <div>
              上家公司离职证明
              <ImagesWall />
            </div>
          </Col>
          <Col span={12}>
            <div>
              职业资格证书
              <ImagesWall />
            </div>
          </Col>
        </Row>

        <Row align="middle" style={styles.cardRowStyle}>
          <Col span={12}>
            <div>
              学历证明
              <ImagesWall />
            </div>
          </Col>
          <Col span={12}>
            <div>
              个人证件照
              <ImagesWall />
            </div>
          </Col>
        </Row>

        <Row align="middle" style={styles.cardRowStyle}>
          <Col span={12}>
            <div>
              入职登记表
              <ImagesWall />
            </div>
          </Col>
          <Col span={12}>
            <div>
              其他材料
              <ImagesWall />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
