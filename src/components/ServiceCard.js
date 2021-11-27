import React from 'react';
import styled from 'styled-components/macro';

export default function ServiceCard({image,title,paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt={title}/>
                <h4 className={"title-h4"}>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-gray);
    border-top: 8px solid var(--border-color);
    border-bottom: 8px solid var(--border-color);
    transition: all .4s ease-in-out;
    margin-top: 3rem !important;
    margin-right: 2%;
    @media screen and (max-width: 1000px){
        display:flex;
    }

    &:hover{
        border-top: 8px solid var(--primary-color);
        border-bottom: 8px solid var(--primary-color);
        transform: translateX(-.5rem);
        transform: translateY(.5rem);
    }
    .container{
        padding: 1.2rem;
        text-align: center;
        @media screen and (max-width: 500px){
            h4{
                font-size:1rem !important;
            }
            p{
                font-size: .7rem !important;
            }
        }
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
        }
    }
`;
