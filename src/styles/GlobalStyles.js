import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    .light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #191d2b;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #92949A;
    --color-gra: rgba(0,212,255,1);
    --gradient-color: linear-gradient(90deg, rgba(0,123,255,1) 1%, rgba(6,194,237,1) 75%, rgba(0,212,255,1) 100%);
    }
    .dark-theme{
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-gray: #191d2b;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #ffffff;
        --scrollbar-track-color: #383838;
        --color-gra: rgba(0,212,255,1);
        --gradient-color: linear-gradient(90deg, rgba(0,123,255,1) 1%, rgba(6,194,237,1) 75%, rgba(0,212,255,1) 100%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }
    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }
    body::-webkit-scrollbar{
        width: 9px;
        background-color:var(--sidebar-dark-color);
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: var(--scrollbar-thump-color);
    }
    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: var(--scrollbar-track-color);
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1rem;
    }
    h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
        }
    }

    span{
        color: var(--primary-color);
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }
    h6{
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: .6rem;
    }
    /* ----Theme Color Switch---- */
    .light-dark-mode{
    position: fixed;
    right: -1%;
    top: 8%;
    background-color: var(--background-light-color-2);
    width: 6rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:3px;
    z-index: 15;
    svg{
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        color: var(--white-color);
        }
        @media screen and (max-width: 700px){
            top: 8%;
            width: 4rem;
            height: 2rem;
            svg{
                font-size: 1rem;
            }
        } 
    }
    /* ----Theme Color Switch---- */

    /* Global Media Queries */
    @media screen and (max-width: 700px){
            h1{
                font-size: 2.5rem;
                span{
                    font-size: 2.5rem;
                }
            }
            p{
                font-size: 1rem;
            }
            h6{
                font-size: .9rem
            }
        } 
        /* Nav Toggler */
        .ham-barger-menu{
            position: fixed;
            right: 2%;
            top: 0;
            display: none;
            z-index: 15;
            svg{
                font-size: 2rem;
            }
            @media screen and (max-width: 1200px){
                display: block;
            }
        @media screen and (max-width: 700px){
            right: 0;
            display: block;
            svg{
                font-size: 1.5rem;
            }
        } 
        }
        .nav-toggle{
            transform: translateX(0);
            z-index: 20;
        }
        /* Nav Toggler */

    @media screen and (max-width: 1100px){
        
    }
    /* Global Media Queries */


`; 