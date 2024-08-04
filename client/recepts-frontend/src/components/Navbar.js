import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    background-color: #333;
    padding: 10px;
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
`;

const NavItem = styled.li`
    margin: 0 10px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const ThemeButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 20px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const Navbar = ({ darkTheme, toggleTheme }) => {
    return (
        <NavbarContainer>
            <NavList>
                <NavItem><NavLink to="/">Главная</NavLink></NavItem>
                <NavItem>
                    <ThemeButton onClick={toggleTheme}>
                        {darkTheme ? 'Светлая тема' : 'Темная тема'}
                    </ThemeButton>
                </NavItem>
            </NavList>
        </NavbarContainer>
    );
};

export default Navbar;
