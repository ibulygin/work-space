import React from 'react';
import Tab from '../../../ui/Tabs/Tab/Tab';
import Tabs from '../../../ui/Tabs/Tabs/Tabs';
import './HeaderMenu.scss';

const HeaderMenu: React.FC = () => {
    const onTabChange = (name: string) => console.log(name);

    return (
        <div className="Header-menu">
            <Tabs onTabChange={onTabChange}>
                <Tab name='boards'>Мои доски</Tab>
                <Tab name='goals'>Мои цели</Tab>
                <Tab name='other'>Другое</Tab>
            </Tabs>
        </div>
    );
};

export default HeaderMenu;