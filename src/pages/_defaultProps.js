import React from "react";
import { SmileOutlined, CrownOutlined, TabletOutlined } from '@ant-design/icons';
import Roster from '../components/Roster'
import Welcome from '../pages/welcome'
import RosterMain from "./RosterPage/main";

export default {
  route: {
    path: '/',
    component:<Welcome/>,
    routes: [
      {
        path: '/home',
        name: '首页',
        icon: <SmileOutlined />,
        component: <Welcome/>,
        routes: [
          {
            path: '/home/working-table',
            name: '工作台',
            icon: <CrownOutlined />,
            component:<Welcome/>,
          },
          {
            path: '/home/roster',
            name: '员工花名册',
            icon: <CrownOutlined />,
            component: <RosterMain name={'员工花名册'}/>,
          },
          {
            path: '/home/talent',
            name: '人才库',
            icon: <CrownOutlined />,
            component: <Welcome/>,
          },
        ],
      },
      {
        path: '/recruitment',
        name: '招聘管理',
        icon: <CrownOutlined />,
        component: <Welcome/>,
      },
      {
        name: '薪酬考核',
        icon: <TabletOutlined />,
        path: '/salary',
        component: <Welcome/>,
      },
      {
        name: '设置',
        icon: <TabletOutlined />,
        path: '/settings',
        component: <Welcome/>,
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
