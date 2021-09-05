import React, {ReactElement, useEffect, useState} from 'react';
import { ITab } from '../interfaces/tabs-interfaces';
import TabView from '../TabTitle/TabView';
import './Tabs.scss';

type Props = {
    children: ReactElement[];
    onTabChange: (tab: ITab) => void;
};

const Tabs: React.FC<Props> = ({children, onTabChange}) => {
    const tabs = children.map((item) => item.props);
    const [selectedTab, setSelectedTab] = useState<ITab>(tabs[0]);

    useEffect(() => onTabChange(selectedTab));

    return (
        <ul className="Tabs">
            {children.map((item) => {
                const {tab} = item.props;

                return (
                    <TabView
                        key={tab.name}
                        tab={tab}
                        setSelectedTab={setSelectedTab}
                        isTabSelected={selectedTab === tab}
                    />
                );
            })}
        </ul>
    );
};

export default Tabs;
