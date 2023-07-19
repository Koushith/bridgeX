import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Outlet } from "react-router-dom";
import { SideBar, TopBar } from "./components";
import { styled } from "styled-components";

const AppContainer = styled.div`
  .main {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <div className="top-nav">
        <TopBar />
      </div>
      <div className="main">
        <div>
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
