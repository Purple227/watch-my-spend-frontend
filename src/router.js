import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
      path: '/',
      component: () => import('./views/LandingPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/auth/SignUp.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/LogIn.vue'),
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: () => import('./views/auth/ResetPassword.vue'),
    },
    {
      path: '/send-verification',
      name: 'sendVerification',
      component: () => import('./views/auth/SendVerification.vue'),
    },
    {
      path: '/verify-email',
      name: 'verifyEmail',
      component: () => import('./views/auth/VerifyEmail.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/onboard/LandingPage.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/dashboard/LandingPage.vue'),
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;