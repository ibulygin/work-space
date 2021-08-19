import React, {ReactElement, useEffect, useState} from 'react';
import TabView from '../TabTitle/TabView';
import  './Tabs.scss';

type Props = {
    children: ReactElement[],
    onTabChange: (name: string) => void,
};

const Tabs: React.FC<Props> = ({children, onTabChange}) => {
    // TODO children[0].props.name не красиво
    const [selectedTab, setSelectedTab] = useState(children[0].props.name);

    useEffect(() => onTabChange(selectedTab));

    return (
        <ul className="Tabs">
            {children.map((item) => {
                const {name, children} = item.props;

                return (
                    <TabView 
                        key={name}
                        title={children}
                        name={name}
                        setSelectedTab={setSelectedTab}
                        isTabSelected={selectedTab === name}
                    />
                );
            })}
        </ul>
    );
};

export default Tabs;