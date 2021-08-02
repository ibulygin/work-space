import React, {Fragment} from 'react';
import {Header} from './Header/Header';

export const Layout: React.FC = (props) => {
    return(
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};