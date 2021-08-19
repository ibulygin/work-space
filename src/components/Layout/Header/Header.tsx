import React from 'react';
import './Header.scss';
import HeaderMenu from './Header-menu/HeaderMenu';

const Header: React.FC = () => {
    return (
        <header className="Header">
            <div className="Header-content">
                <div className="Header-content__logo">Goals<span className="Header-content__logo_up">UP</span></div>
                <HeaderMenu />
                <div className="Header-content__selector">Selector</div>
            </div>
        </header>
    );
};

export default Header;