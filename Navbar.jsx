import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return (
        <>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/drinks'>Drinks</NavLink>
        {/* <a href="/about">About Us</a>
        <a href="/contact">Contact US</a> */}
        </>
    );
}
export default Navbar;