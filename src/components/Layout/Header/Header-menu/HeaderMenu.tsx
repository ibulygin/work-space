import React from 'react';
import { useHistory } from 'react-router-dom';
import {ITab} from '../../../ui/Tabs/interfaces/tabs-interfaces';
import Tab from '../../../ui/Tabs/Tab/Tab';
import Tabs from '../../../ui/Tabs/Tabs/Tabs';
import {MENU_TABS} from './consts/constants';
import './HeaderMenu.scss';

const HeaderMenu: React.FC = () => {
    const history = useHistory();
    const onTabChange = (tab: ITab) => history.push(tab.name);

    return (
        <div className="Header-menu">
            <Tabs onTabChange={onTabChange}>
                {MENU_TABS.map((tab: ITab) => (
                    <Tab key={tab.name} tab={tab}></Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default HeaderMenu;
