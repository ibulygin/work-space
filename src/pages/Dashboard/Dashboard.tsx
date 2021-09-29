import React from 'react';
import {TaskList} from '../../features/task-list';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
    return (
        <section className="dashboard">
            <p className="dashboard__name">Dashboard</p>
            <TaskList name={'Task list 1'} />
        </section>);
};

export default Dashboard;
