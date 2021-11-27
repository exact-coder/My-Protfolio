import { Email, LocationOn, Phone } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components/macro';
import ContactItem from '../components/ContactItem';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';


export default function ContactPage() {
    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"}/>
            <ContactPageStyled>
            <InnerLayout className={"contact-section"}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name" >Enter Your Name<span>*</span></label>
                            <input type="text" id="name"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email" >Enter Your Email<span>*</span></label>
                            <input type="email" id="email"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject" >Enter Your Subject</label>
                            <input type="text" id="subject"/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="textarea">Enter Your Message<span>*</span></label>
                            <textarea name="textarea" id="textarea" cols="30" rows="8"></textarea>
                        </div>
                        <div className="form-field">
                            <PrimaryButton title={"Submit"}/>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem icon={<Phone/>} title={"Phone :"} contact1={"+880179-3745-514"} contact2={"+880183-5411-394"}/>

                    <ContactItem icon={<Email/>} title={"Email :"} contact1={"programmingbees@gmail.com"} contact2={"hasanakash@gmail.com"}/>

                    <ContactItem icon={<LocationOn/>} title={"Location :"} contact1={"Halishahor,Chattogram,Bangladesh"}/>
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
};

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
        .contact-title{
            h4{
                color: var(--white-color);
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 550px){
                width: 70%
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                span{
                    color: red;
                    margin-left:3px;
                }
                label{
                    position: absolute;
                    left: 20px;
                    top: -20px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0rem .5rem; 
                    color: inherit;
                    border-radius: 20px;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 1rem 15px;
                    width: 100%;
                    color: inherit;
                    border-radius: 5px;
                    &:hover{
                        background: transparent;
                    }
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    border-radius: 5px;
                    outline: none;
                    color: inherit;
                    width:100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;