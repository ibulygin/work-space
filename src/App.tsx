import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginPage from './containers/Login/Login';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    );
};

export default App;
