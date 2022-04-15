import InboxIcon from '@mui/icons-material/MoveToInbox'
import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'

export default [
  {
    name: 'dashboard',
    title: 'dashboard',
    route: '/',
    icon: <DashboardIcon />
  },
  {
    name: 'home',
    title: 'Home',
    route: '/home',
    icon: <HomeIcon />
  },
  {
    name: 'mail',
    title: 'Mail',
    route: '/mail',
    icon: <InboxIcon />
  }
]
