import { Space } from 'antd';

export default {
  namespace: 'personData',
  state: {
    count: 0,
    list: [
      {
        key: '1',
        name: '王恒',
        code: 1,
        info: '王恒',
        dr: 0,
      },
    ],
    columns: [
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
      },
    ],
  },
  reducers: {
    add(personData, { item: ai }) {
      let i = personData.list.push(ai);
      return {
        ...personData,
        list: i,
      };
    },

    minus(personData, { item: ia }) {
      let i = personData.list.filter(item => item.key !== ia);
      return {
        ...personData,
        list: i,
      };
    },

    reload(personData, { items: ia }) {
      return {
        ...personData,
        list: ia,
      };
    },
  },
};
