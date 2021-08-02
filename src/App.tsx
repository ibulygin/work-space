import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/Login/Login';
import {Layout} from './components/Layout/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </Layout>
    );
};

export default App;
