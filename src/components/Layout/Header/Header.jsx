import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../../img/header-logo.png';
import cl from './Header.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`${cl.header} ${isOpen ? cl.open : ''}`}>
            <div className={cl.container}>
                <div className={cl.logoWrapper}>
                    <a className={cl.logoLink} href="/">
                        <div className={cl.logoBlock}>
                            <img className={cl.headerLogo} src={headerLogo} alt="logo" />
                            <p className={cl.logoText}>Професійний шлях</p>
                        </div>
                    </a>
                </div>
                <nav className={cl.navBar}>
                    <ul className={cl.list}>
                        <li className={cl.item}>
                            <NavLink className={({ isActive }) => isActive ? `${cl.activeLink}` : '' + `${cl.link}`} to='/'>Головна</NavLink>
                        </li>
                        <li className={cl.item}>
                            <NavLink className={({ isActive }) => isActive ? `${cl.activeLink}` : '' + `${cl.link}`} to='/aboutme'>Про мене</NavLink>
                        </li>
                        <li className={cl.item}>
                            <NavLink className={({ isActive }) => isActive ? `${cl.activeLink}` : '' + `${cl.link}`} to='/portfolio'>Портфоліо</NavLink>
                        </li>
                        <li className={cl.item}>
                            <NavLink className={({ isActive }) => isActive ? `${cl.activeLink}` : '' + `${cl.link}`} to='/contact'>Контакти</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={cl.burgerWrapper}>
                    <button onClick={toggleMenu} className={cl.burgerBtn}>
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </header >
    );
};

export default Header;