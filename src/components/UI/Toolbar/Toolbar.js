import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand, NavItem
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import AnonimousMenu from "./Menus/AnonimousMenu";

const Toolbar = ({user}) => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Tasks</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {user ?  <NavItem>Hello, admin</NavItem> : <AnonimousMenu/>}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;