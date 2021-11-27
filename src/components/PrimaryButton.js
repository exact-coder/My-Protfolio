import React from 'react';
import styled from 'styled-components/macro';

export default function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    border-radius:6px;
    @media screen and (max-width: 500px){
        padding: 1rem 2rem;
        text-align:center;
        font-size: 13px;
    }
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .3rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
        border-radius:8px;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
    &::before{
        content: "";
        position: absolute;
        width: 0;
        height: .3rem;
        transition: all .4s ease-in-out;
        right: 0;
        top: 0;
        opacity: .7;
        border-radius:8px;
    }
    &:hover::before{
        width: 100%;
        background-color: var(--white-color);
    }
`;
