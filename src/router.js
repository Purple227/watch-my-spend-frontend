// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import { useAuthUser } from '@/store/authenticate'; // Import the useAuthUser store

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
    meta: { requiresAuth: true } // Protected route, requires authentication
  },
  {
    path: '/profile/setup',
    name: 'profile',
    component: () => import('./views/onboard/ProFile.vue'),
    meta: { requiresAuth: true } // Protected route, requires authentication
  },
  {
    path: '/expense/account/setup',
    name: 'account',
    component: () => import('./views/onboard/ExpenseAccount.vue'),
    meta: { requiresAuth: true } // Protected route, requires authentication
  },
  {
    path: '/onboard/category',
    name: 'category',
    component: () => import('./views/onboard/CaTegory.vue'),
    meta: { requiresAuth: true } // Protected route, requires authentication
  },
  {
    path: '/onboard/complete',
    name: 'onboardComplete',
    component: () => import('./views/onboard/OnboardComplete.vue'),
    meta: { requiresAuth: true } // Protected route, requires authentication
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./views/dashboard/LandingPage.vue'),
    meta: { requiresAuth: true } // Protected route, requires authentication
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthUser(); // Initialize the useAuthUser store
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is authenticated
    try {
      await authStore.fetchUserData(); // Fetch user data
      if (!authStore.userData) {
        // If no user data is fetched, redirect to login page
        next({
          path: '/login',
          query: { redirect: to.fullPath } // Save the intended route before redirecting to login
        });
      } else {
        next(); // Proceed to the requested route
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // If an error occurs while fetching user data, redirect to login page
      next({
        path: '/login',
        query: { redirect: to.fullPath } // Save the intended route before redirecting to login
      });
    }
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
