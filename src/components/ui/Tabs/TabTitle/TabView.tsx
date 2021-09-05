import React, {useCallback} from 'react';
import {getCssClasses} from '../../../../utils/className';
import { ITab } from '../interfaces/tabs-interfaces';
import './TabTitle.scss';

type Props = {
    tab: ITab;
    setSelectedTab: (tab: ITab) => void;
    isTabSelected: boolean;
};

const TabView: React.FC<Props> = ({tab, setSelectedTab, isTabSelected}) => {
    const onClick = useCallback(() => {
        setSelectedTab(tab);
    }, [tab.name, setSelectedTab]);
    const className = getCssClasses(['Tab__button', {className: 'active', isUsing: isTabSelected}]);

    return (
        <li className="Tab">
            <button className={className} onClick={onClick}>
                {tab.title}
            </button>
        </li>
    );
};

export default TabView;
