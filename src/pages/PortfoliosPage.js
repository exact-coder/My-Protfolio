import React, { useState } from 'react';
import Button from '../components/Button';
import Menu from '../components/Menu';
import Title from '../components/Title';
import { portfolios } from '../data/portfolios';
import { InnerLayout, MainLayout } from '../styles/Layouts';
const allButtons = ["All", ...new Set(portfolios.map(item => item.category))];


export default function PortfoliosPage() {
    const [menuItems, setMenuItems] = useState(portfolios);
    const [button] = useState(allButtons);

    const filter = (button) =>{
        if(button === "All"){
            setMenuItems(portfolios);
            return;
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={"Portfolios"} span={"Portfolios"}/>
            <InnerLayout>
                <Button filter={filter} button={button}/>
                <Menu menuItem={menuItems}/>
            </InnerLayout>
        </MainLayout>
    )
}