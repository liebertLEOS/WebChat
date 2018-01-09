import app from '../App'

const index = r => require.ensure([], () => r(require('../components/index/index')), 'index')
const webchat = r => require.ensure([], () => r(require('../components/webChat')), 'webchat')
const login = r => require.ensure([], () => r(require('../components/login/login')), 'login')

export default[{
  path: '/',
  component: app,
  children: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/webchat',
      component: webchat
    },
    {
      path: '/login',
      component: login
    },
    // 主界面
    {
      path: '/index',
      component: index,
      meta: { requiresAuth: true }
    }
  ]
}]
