import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const NavLink = ({ children, to, baseComponent ,method,data }) => {
    const { url, component } = usePage();

    return (
        <Link
        href={to}
        data={{ foo: "Bar" }}
        className={
          (component === baseComponent ? "text-red-500" : "text-green-500")
        }
        method={method}
        data={data}
        as={method==='post'?'button':'a'}
        >
            {children}
        </Link>
    );
};
// className={url.startsWith('/users') === '/users' ? 'active' : ''}
export default NavLink;