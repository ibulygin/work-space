import React from 'react';
import './task-list.scss';

// const TASKS = [];

interface Props {
    name: string;
}

export const TaskList: React.FC<Props> = ({name}) => {
    
    return (
        <div className="task-list">
            <p className="task-list__name">{name}</p>
        </div>
    );
};