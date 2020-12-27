import React from 'react';
import {
  Image,
  Typography,
  Button,
  Space,
  Form,
  Input,
  Checkbox,
  Select,
  DatePicker,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { history } from 'umi';
import {
  labelCol,
  wrapperCol,
  fromStyle,
  colTitle,
} from '../../../components/common/styles/fromStyle';
import NumericInput from '../../../components/common/input/numericInput';

export default class AddCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Option } = Select;
    const { Text, Link, Title } = Typography;

    return (
      <div style={fromStyle}>
        <Space align="start">
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => {
              history.goBack();
            }}
          />
          <div>
            <Title level={3}>添加员工</Title>
          </div>
        </Space>
        <div>
          <Form labelCol={labelCol} wrapperCol={wrapperCol} colon={false}>
            <div>
              <div>基本信息</div>
              <Form.Item
                label={<div style={colTitle}>姓名</div>}
                labelAlign={'right'}
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item
                label={<div style={colTitle}>电话号码</div>}
                labelAlign={'right'}
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: '请输入电话号码',
                  },
                ]}
              >
                <Input.Group compact>
                  <Select defaultValue="+86" style={{ width: '25%' }}>
                    <Option value="+86">中国 +86</Option>
                  </Select>
                  <NumericInput style={{ width: '75%' }} />
                </Input.Group>
              </Form.Item>
            </div>

            <div>
              <div>工作信息</div>
              <Form.Item
                label={<div style={colTitle}>工号</div>}
                labelAlign={'right'}
                name="code"
              >
                <Input placeholder="请输入" />
              </Form.Item>

              <Form.Item
                label={<div style={colTitle}>员工类型</div>}
                labelAlign={'right'}
                name="type"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ]}
              >
                <Select placeholder="请选择">
                  <Option value="1">正式员工</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<div style={colTitle}>部门</div>}
                labelAlign={'right'}
                name="dept"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ]}
              >
                <Select placeholder="请选择部门">
                  <Option value="1">技术部</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<div style={colTitle}>职位</div>}
                labelAlign={'right'}
                name="job"
                rules={[
                  {
                    required: true,
                    message: '请输入职位',
                  },
                ]}
              >
                <Select placeholder="请选择职位">
                  <Option value="1">开发工程师</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<div style={colTitle}>合同公司</div>}
                labelAlign={'right'}
                name="concop"
                rules={[
                  {
                    required: true,
                    message: '请输入职位',
                  },
                ]}
              >
                <Select placeholder="请选择">
                  <Option value="1">公司1</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<div style={colTitle}>上级领导</div>}
                labelAlign={'right'}
                name="leader"
                rules={[
                  {
                    required: true,
                    message: '请输入职位',
                  },
                ]}
              >
                <Select placeholder="请选择">
                  <Option value="1">Aster</Option>
                </Select>
              </Form.Item>
            </div>

            <div>
              <div>入职信息</div>
              <Form.Item
                label={<div style={colTitle}>入职日期</div>}
                labelAlign={'right'}
                name="indate"
                rules={[
                  {
                    required: true,
                    message: '请选择入职日期',
                  },
                ]}
              >
                <DatePicker
                  placeholder="选择日期"
                  style={{ width: '50%' }}
                  bb
                />
              </Form.Item>
              <Form.Item
                label={<div style={colTitle}>预计转正日期</div>}
                labelAlign={'right'}
                name="per_formaldate"
                rules={[
                  {
                    required: true,
                    message: '请选择预计转正日期',
                  },
                ]}
              >
                <DatePicker placeholder="选择日期" style={{ width: '50%' }} />
              </Form.Item>
              <Form.Item
                label={<div style={colTitle}>审批人</div>}
                labelAlign={'right'}
                name="approver"
              >
                <Select placeholder="请选择" style={{ width: '50%' }}>
                  <Option value="1">Aster</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item style={{ paddingLeft: 50 }}>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text type="secondary">确认后可在</Text>
          <Link>花名册-员工列表</Link>
          <Text type="secondary">
            邀请员工继续完善信息准确，提高信息准确率，规避用工风险
          </Text>
        </div>
      </div>
    );
  }
}
