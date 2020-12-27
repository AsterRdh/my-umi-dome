import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
} from '@ant-design/icons';
import Roster from '../components/Roster';
import Welcome from '../pages/welcome';
import RosterMain from './rosterpage/main';

export default {
  route: {
    path: '/',
    component: '/staffroster',
    routes: [
      {
        path: '/staffroster',
        name: '首页',
        icon: <SmileOutlined />,
        component: '/staffroster',
        routes: [
          {
            path: '/staffroster/workdeck',
            name: '工作台',
            icon: <CrownOutlined />,
            component: '/staffroster',
          },
          {
            path: '/staffroster/roster',
            name: '员工花名册',
            icon: <CrownOutlined />,
            component: '/staffroster/roster',
          },
          {
            path: '/staffroster/talent',
            name: '人才库',
            icon: <CrownOutlined />,
            component: '/staffroster/talent',
          },
        ],
      },
      {
        path: '/staffroster/recruitment ',
        name: '招聘管理',
        icon: <CrownOutlined />,
        component: '/staffroster',
      },
      {
        name: '薪酬考核',
        icon: <TabletOutlined />,
        path: '/staffroster/salary',
        component: '/staffroster',
      },
      {
        name: '设置',
        icon: <TabletOutlined />,
        path: '/staffroster/settings',
        component: '/staffroster',
      },
    ],
  },
  location: {
    pathname: '/staffroster',
  },
};
