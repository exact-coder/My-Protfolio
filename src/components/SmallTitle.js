import React from 'react';
import styled from 'styled-components/macro';

export default function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
};

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px){
        p{
            svg{
                font-size: 1.5rem !important;
            }
        }
        h3{
            font-size: 1rem !important;
        }
    }
    p{
        padding-right: 1rem;
        svg{
            font-size:2rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 1.5rem;
    }
`;
