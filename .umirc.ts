import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/Home/index',
    },
    {
      path: '/detail',
      component: '@/pages/Home/index',
    },
  ],
  fastRefresh: {},
});
