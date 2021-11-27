import React from 'react';
import styled from 'styled-components/macro';

export default function Button({filter,button}) {
    return (
        <ButtonsStyled>
            {
                button.map((btn, i) => {
                    return <ButtonStyled key={i} onClick={() => filter(btn)}>
                        {btn}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
};
const ButtonStyled =styled.button`
    outline: none;
    border: none;
    background-color: var(--primary-color);
    padding: .6rem 1.5rem;
    font-size: inherit;
    color: var(--white-color);
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 1000px){
        padding: .4rem 1rem;
        font-size: .9rem;
    }
    @media screen and (max-width: 600px){
        padding: .2rem .6rem;
        font-size: .5rem;
        margin: .2rem 0;
    }
    &:not(:last-child){
        margin-right: .4rem;
    }
    &:active, &:focus{
        background-color: var(--color-gra);
    }
    &:hover{
        background: var(--gradient-color);
    }
`;

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.5rem auto;
`;

