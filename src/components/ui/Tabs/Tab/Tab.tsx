import React from 'react';
import './Tab.scss';

type Props = {
    name: string
};

const Tab: React.FC<Props> = ({children}) => { 
    return (<div>{children}</div>);
};

export default Tab;