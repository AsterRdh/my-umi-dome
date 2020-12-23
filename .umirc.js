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
      ],
    },
    { path: '/welcome', component: '@/pages/welcome' },
  ],
});
