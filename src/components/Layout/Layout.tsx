import React, {Fragment} from 'react';
import Header from './Header/Header';
import './Layout.scss';

const Layout: React.FC = (props) => {
    return (
        <Fragment>
            <Header />
            <main className="Main">{props.children}</main>
        </Fragment>
    );
};

export default Layout;
