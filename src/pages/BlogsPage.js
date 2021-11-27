import React from 'react';
import styled from 'styled-components/macro';
import Title from '../components/Title';
import { blogs } from '../data/blogs';
import { InnerLayout, MainLayout } from '../styles/Layouts';

export default function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={"Blogs"} span={"Blogs"}/>
                <InnerLayout className={"blog"}>
                    {
                        blogs.map((blog)=> {
                            const {id,title,image,link} = blog;
                            return(
                                <div key={id} className={"blog-item"}>
                                <a href={link}>
                                    <div className="image">
                                        <img src={image} alt="Blogs"/>
                                    </div>
                                </a>
                                    <div className="title">
                                        <a href={link}>
                                            {title}
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
};

const BlogsStyled = styled.div`
    .blog {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 800px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            border-radius: 5px;
            padding: 2rem 1rem;
            background-color: var(--background-dark-gray);
            overflow: hidden;
        }
        .image{
            width: 100%;
            height: 90%;
            padding-bottom: .5rem;
            overflow: hidden;
            img{
                border-radius: 5px;
                width: 100%;
                height: 90%;
                object-fit: cover;
                opacity: 70%;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    opacity: 100%;
                }
            }
        }
        .title{
            a{
                @media screen and (max-width: 550px){
                    font-size: 1rem;
                }
                font-size: 1.6rem;
                padding: .5rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;