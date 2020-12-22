import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/staffroster', component: '@/pages/staffroster' },
    { path: '/welcome', component: '@/pages/weclcome' },
  ],
});
