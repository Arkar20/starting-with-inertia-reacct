import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const NavLink = ({ children, to, baseComponent }) => {
    const { url, component } = usePage();

    return (
        <Link
            href={to}
            data={{ foo: "Bar" }}
            className={
                (component === baseComponent ? "text-red-500" : "text-green-500")
            }
        >
            {children}
        </Link>
    );
};
// className={url.startsWith('/users') === '/users' ? 'active' : ''}
export default NavLink;