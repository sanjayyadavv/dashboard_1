import React from "react";
import {Nav,NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/blogs" activeStyle>
                    Blogs
                </NavLink>
                <NavLink to="/signup" activeStyles>
                    Sign Up
                </NavLink>
                <NavLink to="/test_chart_1" activeStyles>
                    Test_Chart_1
                </NavLink>
                <NavLink to="/testchart1" activeStyles>
                    Test_Chart_1_Live
                </NavLink>
                <NavLink to="/testchart3" activeStyles>
                    Test_Chart_3_Live
                </NavLink>
            </NavMenu> 
            </Nav>
            </>
    )
}

export default Navbar;