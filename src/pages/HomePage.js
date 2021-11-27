import { GitHub, LinkedIn, YouTube } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components/macro';
import Particle from '../components/Particles';

export default function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle/>
            </div>

            <div className="typography">
                <h1>Hi I'm <span>Jahid Hasan</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/jahid-hasan-2327b11aa/" target="_blank" rel="noreferrer noopener" className="icon i-linkedin"><LinkedIn/></a>
                    <a href="https://github.com/JHA-Jahid" target="_blank" rel="noreferrer noopener" className="icon i-github"><GitHub/></a>
                    <a href="https://programmingbees.com" target="_blank" rel="noreferrer noopener" className="icon i-youtube"><YouTube/></a>
                </div>
            </div>

        </HomePageStyled>
    )
};

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
        z-index: -1 !important;
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top:1rem;
            .icon{
                border: 2px solid var(--border-color);
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                    
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube {
                &:hover {
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid var(--white-color);
                    color: var(--white-color);
                }
            }
        }
    }
`;
