import React, {Fragment} from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousMenu = () => (
    <Fragment>
        <NavItem>
            <NavLink tag={RouterNavLink} to="/login" exact>Вход для админа</NavLink>
        </NavItem>
    </Fragment>
);

export default AnonymousMenu;