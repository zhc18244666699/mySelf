import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: 'https://i.postimg.cc/wMtwHDxn/20220317105728.png',
  // logo: 'https://i.postimg.cc/wMtwHDxn/20220317105728.png',
  title: '栀桥·进来看看',
  routes: [
    {
      path: '/',
      component: '@/pages/Home/index',
    },
    {
      path: '/class',
      component: '@/pages/Classes/index',
    },
    {
      path: '/detail',
      component: '@/pages/Detail/index',
    },
  ],
  theme: {
    '@primary-color': '#000',
  },
  fastRefresh: {},
});
