import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/staffroster' },
    {
      path: '/staffroster',
      component: '@/pages/staffroster',
      routes: [
        { path: '/staffroster', component: '@/pages/welcome' },
        {
          path: '/staffroster/roster',
          component: '@/pages/rosterpage/main/index',
          routes: [
            {
              path: '/staffroster/roster/card',
              component: '@/pages/rosterpage/card/index',
            },
            {
              path: '/staffroster/roster/add',
              component: '@/pages/rosterpage/card/addPage',
            },
            {
              path: '/staffroster/roster/',
              component: '@/pages/rosterpage/list/index',
            },
            {
              path: '/staffroster/roster/list',
              component: '@/pages/rosterpage/list/index',
            },
          ],
          Routes: ['@/pages/rosterpage/main/index.js'],
        },
        {
          path: '/staffroster/talent',
          component: '@/pages/talentpage/main/index',
          routes: [
            {
              path: '/staffroster/talent/',
              component: '@/pages/talentpage/list/index',
            },
            {
              path: '/staffroster/talent/list',
              component: '@/pages/talentpage/list/index',
            },
          ],
          Routes: ['@/pages/talentpage/main/index.js'],
        },
      ],
    },
    { path: '/staffroster/welcome', component: '@/pages/welcome' },
  ],
});
