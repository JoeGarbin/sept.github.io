import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AppSettings from '@/views/AppSettings.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      icon: 'home1'
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: AppSettings,
    meta: {
      title: 'Settings',
      icon: 'settings'
    }
  },
  {
    path: '/chart',
    name: 'chart',
    meta: {
      title: 'Chart',
      icon: 'charts-curve'
    },
    children: [
      {
        path: '/chart/line',
        name: 'chart-line',
        component: () => import('@/views/chart/ChartLine.vue'),
        meta: {
          title: 'Line Chart',
          icon: 'charts-line'
        }
      },
      {
        path: '/chart/bar',
        name: 'chart-bar',
        component: () => import('@/views/chart/ChartBar.vue'),
        meta: {
          title: 'Bar Chart',
          icon: 'charts-bar'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About',
      icon: 'about'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
