import { Space } from 'antd';
export const dataSource = [
  {
    key: '1',
    name: '郭德恒',
    code: 1,
    info: '哈哈哈',
    dr:0,
  },
  {
    key: '2',
    name: 'Aster',
    code: 2,
    info: 'www',
    dr:0,
  },
];

export const columns = [
  {
    title: '员工编号',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '员工姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '详细信息',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>修改</a>
        <a>删除</a>
      </Space>
    ),
  },
];
