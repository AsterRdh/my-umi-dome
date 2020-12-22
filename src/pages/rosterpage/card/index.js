import React, { Component } from 'react';
import List from '../list';
import { datainfo } from '../constant/domeData';
import { Typography, Button, Menu, Tabs, Row, Col, Input } from 'antd';
import { ContainerOutlined, FormOutlined } from '@ant-design/icons';
import { styles } from '../constant/styles';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datainfo,
      isUpdate: false,
      testValue: 'testValue',
    };
  }
  render() {
    return (
      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <div>
          <Title level={2}>{this.state.data.hand.name}</Title>
          <div style={{ marginBottom: 8 }}>
            <Text>{this.state.data.hand.type}</Text>
            <Text style={{ marginLeft: 10 }}>
              入职日期: {this.state.data.hand.inData}
            </Text>
          </div>
          <div style={{ marginBottom: 8 }}>
            <ContainerOutlined />
            <Text type="secondary">{this.state.data.hand.belong}</Text>
          </div>
          <Button style={{ borderColor: '#1890ff', color: '#1890ff' }}>
            人事异动
          </Button>
          <Button danger style={{ marginLeft: 20 }}>
            删除
          </Button>
        </div>

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
            <div>
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
                      this.state.data.body.code = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.code}
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
                      this.state.data.body.type = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.type}
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
                      this.state.data.body.indata = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.indata}
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
                      this.state.data.body.tofulldate = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.tofulldate}
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
                      this.state.data.body.dept = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.dept}
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
                      this.state.data.body.jods = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.jods}
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
                      this.state.data.body.conmode_name = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.conmode_name}
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
                      this.state.data.body.concode = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.concode}
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
                      this.state.data.body.conddate = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.conddate}
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
                      this.state.data.body.consdate = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.consdate}
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
                      this.state.data.body.conedata = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.conedata}
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
                      this.state.data.body.conday = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.conday + '天'}
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
                      this.state.data.body.leavedate = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.leavedate}
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
                      this.state.data.body.leavecouse = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.leavecouse}
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
                      this.state.data.body.leaveRemot = e.target.value;
                      this.setState({
                        data: this.state.data,
                      });
                    }}
                    value={this.state.data.body.leaveRemot}
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
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="材料附件" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="测评管理" key="6">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
