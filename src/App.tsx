import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './features/Dashboard/Dashboard';
import LoginPage from './features/Login/Login';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    );
};

export default App;
