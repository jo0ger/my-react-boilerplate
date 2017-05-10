import AppLayout from '~layouts/AppLayout'
import Home from './Home'

export const createRoutes = store => {
  return {
    basename: '/',
    component: AppLayout,
    childRoutes: [
      {
        redirect: {
          from: '/',
          to: '/home',
          push: false
        }
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        exact: true
      }
    ]
  }
}

export default createRoutes
