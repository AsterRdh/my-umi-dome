import React, { Component } from 'react';
import {
  Typography,
  Button,
  Menu,
  Tabs,
  Row,
  Col,
  Input,
  Upload,
  Modal,
} from 'antd';
import {
  ContainerOutlined,
  FormOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { styles } from '../constant/styles';
import { history } from 'umi';
import qtCode from '../../../imgs/qtCode.png';
import { connect } from 'dva';
import ImagesPage from '../../../components/rosterpage/ImagesPage';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

class _Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body1: this.props.body1,
      isUpdate: this.props.location.isChange
        ? this.props.location.isChange
        : false,
      testValue: 'testValue',
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            marginLeft: 20,
            marginRight: 20,
            padding: 30,
            backgroundColor: '#ffffff',
          }}
        >
          <Row>
            <Col span={12}>
              <div>
                <Title level={2}>{this.props.head.name}</Title>
                <div style={{ marginBottom: 8 }}>
                  <Text>{this.props.head.type}</Text>
                  <Text style={{ marginLeft: 10 }}>
                    入职日期: {this.props.head.inData}
                  </Text>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <ContainerOutlined />
                  <Text type="secondary">{this.props.head.belong}</Text>
                </div>
                <Button style={{ borderColor: '#1890ff', color: '#1890ff' }}>
                  人事异动
                </Button>
                <Button danger style={{ marginLeft: 20 }}>
                  删除
                </Button>
              </div>
            </Col>
            <Col span={11} style={{ textAlign: 'right' }}>
              <img src={qtCode} style={{ height: 128 }} />
            </Col>
            <Col span={1} />
          </Row>
        </div>

        <div
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            padding: 30,
            backgroundColor: '#ffffff',
          }}
        >
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="在职信息" key="1">
              <div style={{ textAlign: 'right' }}>
                <Button
                  icon={<FormOutlined />}
                  onClick={() => {
                    this.setState({
                      isUpdate: !this.state.isUpdate,
                    });
                  }}
                />
              </div>
              <div style={{ marginLeft: 50, marginRight: 50 }}>
                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>工号</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.code = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.code}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>员工类别</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.type = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.type}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>入职日期</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.indata = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.indata}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>转正日期</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.tofulldate = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.tofulldate}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>部门</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.dept = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.dept}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>职位</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.jods = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.jods}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>合同模板名称</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.conmode_name = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.conmode_name}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>合同编号</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.concode = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.concode}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>合同签订时间</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.conddate = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.conddate}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>合同开始时间</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.consdate = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.consdate}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>合同结束时间</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.conedata = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.conedata}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>合同期限</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.conday = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.conday + '天'}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>离职日期</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.leavedate = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.leavedate}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>离职原因</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      style={styles.cardItemContentStyle}
                      onChange={e => {
                        this.state.body1.leavecouse = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.leavecouse}
                    />
                  </Col>
                </Row>

                <Row align="middle" style={styles.cardRowStyle}>
                  <Col span={2} style={{ textAlign: 'right' }}>
                    <Text style={styles.cardItemNameStyle}>离职备注</Text>
                  </Col>
                  <Col span={10}>
                    <Input
                      style={styles.cardItemContentStyle}
                      placeholder="Borderless"
                      bordered={this.state.isUpdate}
                      disabled={!this.state.isUpdate}
                      onChange={e => {
                        this.state.body1.leaveRemot = e.target.value;
                        this.setState({
                          data: this.state.data,
                        });
                      }}
                      value={this.state.body1.leaveRemot}
                    />
                  </Col>
                  <Col span={2} style={{ textAlign: 'right' }}></Col>
                  <Col span={10}></Col>
                </Row>
              </div>
            </TabPane>

            <TabPane tab="个人信息" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="联系信息" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="简历信息" key="4">
              Content of Tab Pane 4
            </TabPane>
            <TabPane tab="材料附件" key="5">
              <ImagesPage />
            </TabPane>
            <TabPane tab="测评管理" key="6">
              Content of Tab Pane 6
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    head: state.personData2.head,
    body1: state.personData2.body1,
    body5: state.personData2.body5,
  };
}

const Card = connect(mapStateToProps)(_Card);

export default Card;
