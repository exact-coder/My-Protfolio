import React from 'react';
import styled from 'styled-components/macro';
import design from '../img/design.svg';
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';

export default function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"Services"}/>
                <div className="services">
                    <ServiceCard image={design} title={"Web Design"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing."}/>
                        <ServiceCard image={intelligence} title={"Artificial Intelligence"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing."}/>
                    <ServiceCard image={gamedev} title={"Game Development"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing."}/>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        justify-content: space-between;
        @media screen and (max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        }
        @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2rem;
        }
    }
`;
