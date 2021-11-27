import React from 'react';
import styled from 'styled-components/macro';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

export default function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="Resume"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Jahid Hasan</span></h4>
                <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Jahid Hasan</p>
                        <p>: 23</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla,English,Hindi,Urdu</p>
                        <p>: Bangladesh,Chattogram</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={"Download Cv"}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        width: 100%;
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            height: 100%;
            border-radius:10px;
            object-fit: cover;

        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
            @media screen and (max-width: 400px){
                font-size: 1.5rem;
                span{
                    font-size: 1.5rem;
                }
            }
        }
        .paragraph{
            padding: 1rem 0;
            font-size: 22px;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            @media screen and (max-width: 400px){
                .info-title{
                    padding-right: 0;
                    p{
                        font-size:15px;
                    }
                }
                .info{
                    p{
                        padding: .1rem;
                        font-size: 14px;
                    }
                }
            }
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    font-size: 19px;
                }
            }
        }
    }
`;
