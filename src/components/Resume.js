import { BusinessCenter, School } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ResumeItem from './ResumeItem';
import SmallTitle from './SmallTitle';
import Title from './Title';

export default function Resume() {
    return (
            <ResumeStyled>
                <Title title={"Resume"} span={"Resume"}/>
                <InnerLayout>
                    <div className="smallTitle">
                        <SmallTitle icon={<School/>} title={"Educational Qualification"}/>
                    </div>
                    <div className="resume-content">
                        <div className={"expreinceItem"}>
                            <ResumeItem 
                        year={"2019 - 2020"} 
                        title={"Web Disign & Development"}
                        subTitle={"Dimantion IT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales tortor dui, vitae volutpat erat faucibus at. Sed euismod volutpat sodales. Quisque pellentesque porttitor est, eu facilisis libero aliquet id. Donec dolor lacus, luctus ut dolor at, venenatis pretium elit. Pellentesque condimentum vestibulum consequat."}/>
                        </div>
                        <div className={"expreinceItem"}>
                            <ResumeItem 
                        year={"2020 - 2021"} 
                        title={"MERN Stack Development"}
                        subTitle={"MSB Academy"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales tortor dui, vitae volutpat erat faucibus at. Sed euismod volutpat sodales. Quisque pellentesque porttitor est, eu facilisis libero aliquet id. Donec dolor lacus, luctus ut dolor at, venenatis pretium elit. Pellentesque condimentum vestibulum consequat."}/>
                        </div>
                    </div>
                    <div className="smallTitle u-small-title-margin">
                        <SmallTitle icon={<BusinessCenter/>} title={"Working Experince"}/>
                    </div>
                    <div className="resume-content">
                        <div className={"expreinceItem"}>
                            <ResumeItem 
                        year={"2019 - 2020"} 
                        title={"Web Disign & Development"}
                        subTitle={"Dimantion IT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales tortor dui, vitae volutpat erat faucibus at. Sed euismod volutpat sodales. Quisque pellentesque porttitor est, eu facilisis libero aliquet id. Donec dolor lacus, luctus ut dolor at, venenatis pretium elit. Pellentesque condimentum vestibulum consequat."}/>
                        </div>
                        <div className={"expreinceItem"}>
                            <ResumeItem 
                        year={"2020 - 2021"} 
                        title={"MERN Stack Development"}
                        subTitle={"MSB Academy"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales tortor dui, vitae volutpat erat faucibus at. Sed euismod volutpat sodales. Quisque pellentesque porttitor est, eu facilisis libero aliquet id. Donec dolor lacus, luctus ut dolor at, venenatis pretium elit. Pellentesque condimentum vestibulum consequat."}/>
                        </div>
                        <div className={"expreinceItem"}>
                            <ResumeItem 
                        year={"2019 - 2020"} 
                        title={"App Development"}
                        subTitle={"Dimantion IT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales tortor dui, vitae volutpat erat faucibus at. Sed euismod volutpat sodales. Quisque pellentesque porttitor est, eu facilisis libero aliquet id. Donec dolor lacus, luctus ut dolor at, venenatis pretium elit. Pellentesque condimentum vestibulum consequat."}/>
                        </div>
                    </div>
                </InnerLayout>
            </ResumeStyled>
    )
};

const ResumeStyled = styled.div`
    .smallTitle{
        padding-bottom: 2rem;
    }
    .u-small-title-margin{
        margin-top: 5rem;
    }
    .resume-content{
        margin-left: 4rem;
        @media screen and (max-width: 600px){
            margin-left: 0rem;
        }
        .expreinceItem{
            margin-bottom: 1.5rem;
            border-left: 4px solid var(--primary-color);
            border-right: 4px solid var(--primary-color);
            background-color: var(--border-color);
            padding: 1.5rem 1rem;
            border-radius: 10px;
        }
    }
`;
