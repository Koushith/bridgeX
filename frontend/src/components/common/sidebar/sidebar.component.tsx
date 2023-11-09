import { Link, useLocation } from "react-router-dom"

import {
  HomeIcon,
  User2,
  Settings,
  UploadIcon,
  Heart,
  BellIcon,
  User2Icon,
  Settings2Icon,
} from "lucide-react"
import { DashboardIcon, InfoCircledIcon } from "@radix-ui/react-icons"
// import { useIsAdmin } from '@/hooks'
import { SideBarContainer } from "./sidebar.styles"

export const SideBar = () => {
  const location = useLocation()
  const isAdmin = true
  return (
    <SideBarContainer>
      <ul>
        {/* <li
            className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
              location.pathname === '/dashboard'
                ? 'bg-secondary'
                : 'hover:bg-secondary/80'
            } h-9 px-4 py-2 w-full justify-start`}
          >
            <DashboardIcon className="h-[1.2rem] w-[1.2rem]" />{' '}
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === "/" ? "bg-secondary" : "hover:bg-secondary/80"
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <HomeIcon className='h-[1.2rem] w-[1.2rem]' />{" "}
          <Link to='/'>Home</Link>
        </li>
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === "/address" ? "bg-accent" : "hover:bg-accent"
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <User2Icon className='h-[1.2rem] w-[1.2rem]' />{" "}
          <Link to='/address'>Address Book</Link>
        </li>
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === "/transactions"
              ? "bg-accent"
              : "hover:bg-accent"
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <InfoCircledIcon className='h-[1.2rem] w-[1.2rem]' />{" "}
          <Link to='/transactions'>Transactions</Link>
        </li>
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === "/settings" ? "bg-accent" : "hover:bg-accent"
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <Settings2Icon className='h-[1.2rem] w-[1.2rem]' />{" "}
          <Link to='/settings'>Settings</Link>
        </li>{" "}
        <li
          className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
            location.pathname === "/profile" ? "bg-accent" : "hover:bg-accent"
          } h-9 px-4 py-2 w-full justify-start`}
        >
          <User2 className='h-[1.2rem] w-[1.2rem]' />{" "}
          <Link to='/profile'>Profile</Link>
        </li>{" "}
      </ul>
    </SideBarContainer>
  )
}
