// import { Link, useLocation } from 'react-router-dom'

// export const SideBar = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to='/'>Home</Link>
//         </li>
//         <li>
//           <Link to='/manage'>Manage</Link>
//         </li>{' '}
//         <li>
//           <Link to='/notifications'>Notifications</Link>
//         </li>{' '}
//         <li>
//           <Link to='/profile'>Profile</Link>
//         </li>{' '}
//       </ul>
//     </div>
//   )
// }

import { Link, useLocation } from 'react-router-dom'

import { HomeIcon, User2, Settings, UploadIcon, Heart } from 'lucide-react'
import { DashboardIcon } from '@radix-ui/react-icons'
// import { useIsAdmin } from '@/hooks'
import { SideBarContainer } from './sidebar.styles'

export const SideBar = () => {
  const location = useLocation()
  const isAdmin = true
  return (
    <SideBarContainer>
      <ul>
        {isAdmin && (
          <li
            className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
              location.pathname === '/dashboard'
                ? 'bg-secondary'
                : 'hover:bg-secondary/80'
            } h-9 px-4 py-2 w-full justify-start`}
          >
            <DashboardIcon className="h-[1.2rem] w-[1.2rem]" />{' '}
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === '/' ? 'bg-secondary' : 'hover:bg-secondary/80'
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <HomeIcon className="h-[1.2rem] w-[1.2rem]" />{' '}
          <Link to="/">Home</Link>
        </li>
        {isAdmin && (
          <li
            className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
              location.pathname === '/uploads' ? 'bg-accent' : 'hover:bg-accent'
            } h-9 px-4 py-2 w-full justify-start`}
          >
            <UploadIcon className="h-[1.2rem] w-[1.2rem]" />{' '}
            <Link to="/uploads">All Scripts</Link>
          </li>
        )}
        {isAdmin && (
          <li
            className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
              location.pathname === '/users' ? 'bg-accent' : 'hover:bg-accent'
            } h-9 px-4 py-2 w-full justify-start`}
          >
            <User2 className="h-[1.2rem] w-[1.2rem]" />{' '}
            <Link to="/users">All Users</Link>
          </li>
        )}
        {isAdmin && (
          <li
            className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
              location.pathname === '/liked-scripts'
                ? 'bg-accent'
                : 'hover:bg-accent'
            } h-9 px-4 py-2 w-full justify-start`}
          >
            <Heart className="h-[1.2rem] w-[1.2rem]" />{' '}
            <Link to="/liked-scripts">Shortlisted </Link>
          </li>
        )}
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === '/profile' ? 'bg-accent' : 'hover:bg-accent'
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <Settings className="h-[1.2rem] w-[1.2rem]" />{' '}
          <Link to="/profile">Profile</Link>
        </li>{' '}
      </ul>
    </SideBarContainer>
  )
}