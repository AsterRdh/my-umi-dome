import React, { Component } from 'react';
import { connect } from 'dva';
import {
  Tabs,
  Radio,
  Row,
  Col,
  Input,
  Select,
  Space,
  Table,
  Popconfirm,
  Typography,
  Button,
  Checkbox,
} from 'antd';
import PointTag from '../../../components/common/tags/pointTag';
import { history } from 'umi';
const { Search } = Input;
const { Option } = Select;
const { Text, Link } = Typography;

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '基本信息',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: '应聘职位',
    dataIndex: 'job',
    key: 'job',
    render: job => <Link>{job}</Link>,
  },
  {
    title: '面试结果',
    dataIndex: 'result',
    key: 'result',
    filters: [
      {
        text: '无',
        value: '0',
      },
      {
        text: '待定',
        value: '1',
      },
      {
        text: '通过',
        value: '2',
      },
      {
        text: '未通过',
        value: '3',
      },
    ],
    render: result => <PointTag tag={result} />,
    filterMultiple: false,
    onFilter: (value, record) => {
      return (record.result + '').indexOf(value) >= 0;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '加入时间',
    dataIndex: 'create_time',
    key: 'create_time',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.create_time - b.create_time,
  },
  {
    title: '操作',
    key: 'action',
  },
];

class _List extends Component {
  onSearch = value => console.log(value);

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: [],
    };
  }
  componentWillMount() {}

  componentDidMount() {}
  render() {
    const { selectedRowKeys } = this.state.selectedKey;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    columns.forEach(function(item, index) {
      if (item.key == 'action') {
        item.render = (text, record) => (
          <Space size="middle">
            <Link>邀请面试</Link>
            <Link>入职审批</Link>
            <Popconfirm
              title="Delete?"
              onConfirm={() => this.minusClick(record.key)}
            >
              <Link style={{ color: '#ff0000' }}>删除</Link>
            </Popconfirm>
          </Space>
        );
      }
    }, this);

    return (
      <div style={{ backgroundColor: '#ffffff', padding: 20 }}>
        <div style={{ textAlign: 'center' }}>
          <Radio.Group style={{ marginBottom: 8 }}>
            <Radio.Button value="top">面试人才库</Radio.Button>
            <Radio.Button value="left">离职员工库</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Row style={{ marginBottom: 20 }}>
            <Col span={12}>
              <Space>
                应聘职位：
                <Select placeholder="请选择">
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
                面试结果：
                <Select placeholder="请选择">
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
              </Space>
            </Col>
            <Col span={6} offset={6}>
              <Search onSearch={this.onSearch} style={{ width: 200 }} />
            </Col>
          </Row>
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.props.data}
            summary={() => (
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>
                  <Checkbox />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={0}>
                  <Space style={{ float: 'left' }}>
                    <Button type="primary" style={{ borderRadius: 7 }}>
                      下载简历到本地
                    </Button>
                    <Button danger style={{ borderRadius: 7 }}>
                      删除
                    </Button>
                  </Space>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            )}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.talentData.list,
  };
}

const List = connect(mapStateToProps)(_List);

export default List;
