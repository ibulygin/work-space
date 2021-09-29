import React, {Fragment} from 'react';
import Header from './Header/Header';
import './Layout.scss';

const Layout: React.FC = (props) => {
    return (
        <section className="app">
            <Header />
            <main className="Main">{props.children}</main>
        </section>
    );
};

export default Layout;
