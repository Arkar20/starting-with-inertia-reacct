import NavLink from "./NavLink"
import React from "react"
const Nav = () => {
    return (
        <>
        <ul>
            <li>
                <NavLink to="/" baseComponent="Home">Home page</NavLink>
                <NavLink to="/about" baseComponent="About">About Page</NavLink>
                <NavLink to="/signout" method="post" data={{foo:'bar'}} >Logout</NavLink>
                <input type="text" className="p-2 w-75 border-1 border-grey-600"/>
                </li>
            </ul>
            </>
    );
};

export default Nav;