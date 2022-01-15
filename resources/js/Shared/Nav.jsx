import NavLink from "./NavLink"
import React from "react"
const Nav = () => {
    return (
        <>
            <ul className="space-x-3">
                    <NavLink to="/" baseComponent="Home">
                        Home page
                    </NavLink>
                    <NavLink to="/about" baseComponent="About">
                        About Page
                    </NavLink>
                    <NavLink to="/signout" method="post" data={{ foo: "bar" }}>
                        Logout
                    </NavLink>
                    <NavLink to="/register" baseComponent="User/Create">
                        Register
                    </NavLink>
                    <input
                        type="text"
                        className="p-2 w-75 border-1 border-grey-600"
                    />
            </ul>
        </>
    );
};

export default Nav;