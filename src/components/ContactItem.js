import React from 'react';
import styled from 'styled-components/macro';

export default function ContactItem({icon,title, contact1,contact2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )
};

const ContactItemStyled = styled.div`
    margin-top: 3.8rem;
    padding: .5rem 1rem;
    background-color: var(--background-dark-gray);
    display: flex;
    align-items: center;
    border-radius: 5px;
    .left-content{
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            font-size: 2.7rem;
            color: var(--white-color);
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }
`;
