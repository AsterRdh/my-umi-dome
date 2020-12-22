import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/staffroster' },
    { path: '/staffroster',
      component: '@/pages/staffroster',
      routes: [
        { path: '/staffroster', component: '@/pages/welcome' },
        {
          path: '/staffroster/roster',
          component: '@/pages/rosterpage/main/index',
          Routes: [
            '@/pages/rosterpage/main/index.js',
            {
              path: '/staffroster/roster/card',
              component: '@/pages/rosterpage/card/index',
            }
          ]
        }
      ]
    },
    { path: '/welcome', component: '@/pages/welcome' },
  ],
});
