import React, { Component } from 'react';
import { Pagination, Layout, Table, Space, Button, Row, Col } from 'antd';
import { dataSource, columns } from '../constant/domeData';
import { listBodyDelete, reFresh, addItem } from './events/listOperator';
import { RedoOutlined } from '@ant-design/icons';
import Bubble from '@umijs/preset-ui/src/bubble/Bubble';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { history } from 'umi';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPage: 1,
      totalPage: 1,
      data: dataSource,
      canDel: false,
    };
  }
  componentWillMount() {}

  componentDidMount() {}

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
    columns.forEach(function(item) {
      if (item.key == 'action') {
        item.render = (text, record) => (
          <Space size="middle">
            <a>修改</a>
            <a onClick={() => listBodyDelete(self, data, record.key)}>删除</a>
          </Space>
        );
      }
    });

    return (
      <Layout
        style={{
          backgroundColor: '#ffffff',
        }}
      >
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
                  onClick={() => reFresh(this)}
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
            dataSource={this.state.data}
            columns={columns}
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
export default List;
