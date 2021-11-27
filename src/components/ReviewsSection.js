import React from 'react';
import styled from 'styled-components/macro';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
import Title from './Title';

export default function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={"Reviews"} span={"Reviews"}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat placerat viverra. Pellentesque mattis odio at pellentesque semper. Curabitur gravida arcu sed tortor mollis, et viverra orci tempor. Nulla in dolor id erat posuere pharetra. Praesent vitae sollicitudin arcu."}/>
                    <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat placerat viverra. Pellentesque mattis odio at pellentesque semper. Curabitur gravida arcu sed tortor mollis, et viverra orci tempor. Nulla in dolor id erat posuere pharetra. Praesent vitae sollicitudin arcu."}/>
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
};

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 600px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 3rem;
        }
    }
`;
