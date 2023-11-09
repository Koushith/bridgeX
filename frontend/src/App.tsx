import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Button } from "./components/ui/button"
import { Outlet, useLocation } from "react-router-dom"
import { SideBar, TopBar } from "./components"
import { styled } from "styled-components"

const AppContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  .main {
    display: flex;
    /* gap: 6rem; */
    /* padding: 2rem; */

    .outlet {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
    }
  }
`

function App() {
  const location = useLocation()
  return (
    <AppContainer>
      {location.pathname !== "/auth" && (
        <div className='top-nav'>
          <TopBar />
        </div>
      )}

      <div className='main mt-6'>
        {location.pathname !== "/auth" && (
          <div>
            <SideBar />
          </div>
        )}

        <div className='outlet'>
          <Outlet />
        </div>
      </div>
    </AppContainer>
  )
}

export default App
