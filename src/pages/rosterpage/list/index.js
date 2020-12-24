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

  onChange = page => {
    this.setState({
      nowPage: page,
      selectedRowKeys: [],
    });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const { Header, Footer, Sider, Content } = Layout;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    let data = this.state.data;
    let self = this;
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
        }}
      >
        <h1>count:{this.props.count}</h1>
        <Header style={{ backgroundColor: '#ffffff', fontSize: 20 }}>
          <Row>
            <Col span={12}>
              <div>{this.props.name}</div>
            </Col>
            <Col span={12}>
              <div style={{ textAlign: 'right' }}>
                <Button
                  type="primary"
                  onClick={() => {
                    history.push('/staffroster/roster/card');
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
                <Link to="/index">index</Link>
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

                  console.log(record);
                },
              };
            }}
          />
        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
          <Pagination
            defaultCurrent={1}
            current={this.state.nowPage}
            total={this.state.totalPage}
            onChange={this.onChange}
          />
        </Footer>
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
