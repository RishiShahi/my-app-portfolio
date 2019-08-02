import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" exact={true}>HomePage</NavLink>
    <NavLink to="/contact" >Contact</NavLink>
    <NavLink to="/aboutme" exact={true}>AboutMe</NavLink>
  </header>  
);

export default Header;