import VueRouter from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import ('@/views/LandingPage.vue')
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import ('@/views/HomePage.vue')
    },
    {
        path: '/AllMovies',
        name: 'AllMovies',
        component: () => import ('@/views/AllMovies.vue')
    },
    {
      path: '/AllScreenings',
      name: 'AllScreenings',
      component: () => import ('@/views/AllScreenings.vue')
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: () => import ('@/views/AboutUs')
    },
    {
      path: '*',
      redirect: '/'
    }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
