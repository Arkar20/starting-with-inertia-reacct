import NavLink from "./NavLink"
import React from "react"
const Nav = () => {
    return (
        <ul>
            <li>
                <NavLink to="/" baseComponent="Home">Home page</NavLink>
                <NavLink to="/about" baseComponent="About">About Page</NavLink>
                <NavLink to="/signout" method="post" data={{foo:'bar'}} >Logout</NavLink>
            </li>
            <li></li>
        </ul>
    );
};

export default Nav;