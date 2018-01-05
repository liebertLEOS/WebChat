import App from '../App'

const WebChat = r => require.ensure([], () => r(require('../components/WebChat')), 'WebChat')
const SignIn = r => require.ensure([], () => r(require('../components/SignIn/SignIn')), 'SignIn')
const Main = r => require.ensure([], () => r(require('../components/Main/main')), 'Main')

export default[{
  path: '/',
  component: App,
  children: [
    {path: '', redirect: '/Main'},
    {path: '/WebChat', component: WebChat},
    {path: '/SignIn', component: SignIn},
    {path: '/Main', component: Main}
  ]
}]
