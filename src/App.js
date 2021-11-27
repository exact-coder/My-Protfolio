import { IconButton, Switch } from '@material-ui/core';
import { Brightness6, Menu } from '@material-ui/icons';
import React, { useEffect, useState } from "react";
import { Route, Switch as Switching } from "react-router-dom";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfoliosPage from "./pages/PortfoliosPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
    return () => {
      
    }
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }
  return (
    <>
      <Sidebar navToggle={navToggle}/>
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness6/>
          </div>
          <div className="right-content">
            <Switch 
            value=""
            size="small"
            checked={checked}
            onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-barger-menu">
        <IconButton onClick={()=> setNavToggle(!navToggle)}>
          <Menu/>
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        </div>
        <Switching>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/about" exact>
            <AboutPage/>
          </Route>
          <Route path="/resume" exact>
            <ResumePage/>
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage/>
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage/>
          </Route>
          <Route path="/contact" exact>
            <ContactPage/>
          </Route>
        </Switching>
      </MainContentStyled>
    </>
  );
}


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1100px){
    margin-left:0px;
    }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -5;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;



// Hai,Your working vedio length is 8.31min.
