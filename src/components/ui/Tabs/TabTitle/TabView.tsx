import React, { useCallback } from 'react';
import {getCssClasses} from '../../../../utils/className';
import './TabTitle.scss';

type Props = {
    name: string,
    title: string,
    setSelectedTab: (name: string) => void,
    isTabSelected: boolean,
};

const TabView: React.FC<Props> = ({title, setSelectedTab, name, isTabSelected}) => {
    const onClick = useCallback(
        () => {
            setSelectedTab(name);
        },
        [name, setSelectedTab],
    );
    const className = getCssClasses(['Tab__button', {className: 'active', isUsing: isTabSelected}]);

    return (
        <li className="Tab">
            <button className={className} onClick={onClick}>{title}</button>
        </li>
    );
};

export default TabView;