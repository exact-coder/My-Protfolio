import React from 'react';
import styled from 'styled-components/macro';
import Navigation from './Navigation';

export default function Sidebar({navToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle': ""}`}>
            <Navigation/>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    position: fixed;
    background-color: var(--sidebar-dark-color);
    overflow:hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width: 700px){
        transform: translate(-100%);
        z-index: 20;
        width: 9rem;
    }
    @media screen and (max-width: 1100px){
        transform: translate(-100%);
        z-index: 20;
    }
`;
