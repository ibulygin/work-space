import React from 'react';
import { ITab } from '../interfaces/tabs-interfaces';
import './Tab.scss';

type Props = {
    tab: ITab
};

const Tab: React.FC<Props> = ({tab: {title}}) => {
    return <div>{title}</div>;
};

export default Tab;
