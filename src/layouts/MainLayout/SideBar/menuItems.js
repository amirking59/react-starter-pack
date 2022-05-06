import InboxIcon from '@mui/icons-material/MoveToInbox'
import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'

export default [
  {
    name: 'dashboard',
    title: 'dashboard',
    route: '/',
    permissions: ['ADMIN', 'USER'],
    icon: <DashboardIcon />
  },
  {
    name: 'home',
    title: 'Home',
    route: '/home',
    permissions: ['ADMIN'],
    icon: <HomeIcon />,
    children: [
      {
        name: 'mail',
        title: 'Mail',
        route: '/mail',
        permissions: ['ADMIN'],
        icon: <InboxIcon />
      }
    ]
  }
]
