import { Space } from 'antd';
export const dataSource = [
  {
    key: '1',
    name: '郭德恒',
    code: 1,
    info: '哈哈哈',
    dr: 0,
  },
  {
    key: '2',
    name: 'Aster',
    code: 2,
    info: 'www',
    dr: 0,
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

export const datainfo = {
  hand: {
    name: '王恒',
    type: '正式员工',
    inData: '2020.4.25',
    belong: '成都知涯科技有限公司',
  },
  body: {
    code: '0001',
    indata: '2020-04-25',
    dept: '产品研发部',
    conmode_name: '劳动合同模板',
    consdate: '2020-04-15',
    conedata: '2020-04-15',
    leavedate: '2020-04-30',
    leaveRemot: '无',
    type: '正式员工',
    tofulldate: '2020-04-26',
    jods: '产品',
    concode: '01928383',
    conddate: '2020-04-15',
    conday: '1',
    leavecouse: '个人原因',
  },
};
