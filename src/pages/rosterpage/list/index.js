import React, { Component } from 'react';
import {
  Pagination,
  Layout,
  Table,
  Space,
  Button,
  Row,
  Col,
  Popconfirm,
  Typography,
} from 'antd';
import { dataSource, columns } from '../constant/domeData';
import { RedoOutlined } from '@ant-design/icons';
import Bubble from '@umijs/preset-ui/src/bubble/Bubble';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { history } from 'umi';
import { connect } from 'dva';

class _List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPage: 1,
      totalPage: 1,
      data: dataSource,
      canDel: false,
    };
    this.minusClick = this.minusClick.bind(this);
    this.reloadClick = this.reloadClick.bind(this);
  }
  componentWillMount() {}

  componentDidMount() {}

  minusClick(value) {
    this.props.dispatch({ type: 'personData/minus', item: value });
  }

  reloadClick(value) {
    this.props.dispatch({ type: 'personData/reload', item: value });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const { Header, Content } = Layout;
    const { Title } = Typography;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    this.props.columns.forEach(function(item, index) {
      if (item.key == 'action') {
        item.render = (text, record) => (
          <Space size="middle">
            <a
              onClick={() =>
                history.push({
                  pathname: '/staffroster/roster/card',
                  key: record.key,
                  isChange: true,
                })
              }
            >
              修改
            </a>
            <Popconfirm
              title="Delete?"
              onConfirm={() => this.minusClick(record.key)}
            >
              <a>删除</a>
            </Popconfirm>
          </Space>
        );
      }
    }, this);

    return (
      <Layout
        style={{
          backgroundColor: '#ffffff',
          padding: 20,
          paddingTop: 50,
        }}
      >
        <Header style={{ backgroundColor: '#ffffff', fontSize: 20 }}>
          <Row>
            <Col span={12}>
              <Title level={2}>员工花名册</Title>
            </Col>
            <Col span={12}>
              <div style={{ textAlign: 'right' }}>
                <Button
                  type="primary"
                  onClick={() => {
                    history.push('/staffroster/roster/add');
                  }}
                >
                  新增
                </Button>
                <Button disabled={!this.state.canDel}>删除</Button>
                <Button
                  onClick={() => this.reloadClick()}
                  icon={<RedoOutlined />}
                  style={{ marginLeft: 20 }}
                />
              </div>
            </Col>
          </Row>
        </Header>

        <Content>
          <Table
            rowSelection={rowSelection}
            dataSource={this.props.data}
            columns={this.props.columns}
            onRow={record => {
              return {
                onDoubleClick: event => {
                  debugger;
                  history.push('/staffroster/roster/card');
                  console.log(record);
                },
              };
            }}
          />
        </Content>
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.personData.list,
    columns: state.personData.columns,
    count: state.personData.count,
  };
}

const List = connect(mapStateToProps)(_List);

export default List;
