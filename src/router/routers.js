import app from '../App'

const index = r => require.ensure([], () => r(require('../components/index/index')), 'index')
const webchat = r => require.ensure([], () => r(require('../components/webChat')), 'webchat')
const signin = r => require.ensure([], () => r(require('../components/signin/signIn')), 'signin')
const main = r => require.ensure([], () => r(require('../components/main/main')), 'main')
const chat = r => require.ensure([], () => r(require('../components/chat/chat')), 'chat')

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
      path: '/signin',
      component: signin
    },
    // 右侧面板
    {
      path: '/main',
      component: main
    },
    // 主界面
    {
      path: '/index',
      component: index
    },
    // 聊天页
    {
      path: '/chat/user/:user',
      component: chat
    }
  ]
}]
