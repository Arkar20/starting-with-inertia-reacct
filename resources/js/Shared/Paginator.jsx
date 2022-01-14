import { Link } from "@inertiajs/inertia-react";
import React from "react"
const Paginator = ({ links }) => {
  return (
    <ul className="flex gap-x-3 ">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          preserveScroll
          dangerouslySetInnerHTML={{ __html: link.label }}
          className={`p-2 ${link.active ? "bg-gray-700 text-white " : ""
            }`}
        ></Link>
      ))}
    </ul>
  );
}
 
export default Paginator;