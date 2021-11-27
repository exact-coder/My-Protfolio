import React from 'react';
import styled from 'styled-components/macro';

export default function ResumeItem({year,title,subTitle,text}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
};

const ResumeItemStyled = styled.div`
    display: flex;
    .left-content{
        width: 80%;
        text-align: center;
        p{
            margin-top: 50%;
            display: inline-block;
        }
    }
    .right-content{
        margin-left: 1rem;
        @media screen and (max-width: 600px){
            h5{
                font-size:1.1rem !important;
            }
            h6{
                font-size:.8rem !important;
            }
            p{
                font-size: .6rem !important;
            }
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .5rem;
        }
        h6{
            padding-bottom:.6rem;
            font-size: 1.3rem;
        }
        p{
            
        }
    }
`;
