import { Button } from '@/components/ui/button'


import { ButtonIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarContainer } from './topbar.styles'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/theme'
import { LogOutIcon, Moon, Settings, Sun, User2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


export const TopBar = () => {
 
  const { setTheme } = useTheme()
  const navigate = useNavigate()
  
const isAdmin = true
const isAuthendicated =true
  return (
    <div className="border-b " >
      <div
        className="flex items-center justify-between p-4 mt-0 mb-0 ml-auto mr-auto "
        style={{ maxWidth: '1600px',height:'80px' }}
      >
        <h1>BridgeX 📄</h1>
        <div className="flex">
          <div className="hidden md:block">
            {' '}
            {/* Hide on mobile */}
            {isAuthendicated ? (
              <Button
                className="bg-red-500 hover:bg-red-600"
               // onClick={logoutHandler}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="bg-green-500 hover:bg-green-600"
              //  onClick={loginHandler}
              >
                Sign up
              </Button>
            )}
          </div>

          {/* mobile */}
          <div className=" flex items-center justify-center lg:hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="icon">
                  <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Hamburger</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isAdmin && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/uploads')}>
                      All Scripts
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/users')}>
                      Users
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigate('/liked-scripts')}
                    >
                      Shortlisted
                    </DropdownMenuItem>
                  </>
                )}

                <DropdownMenuItem onClick={() => navigate('/')}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Profile
                </DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => navigate('/users')}>
                  Users
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="ml-2">
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}