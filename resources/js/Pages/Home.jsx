import { Link } from "@inertiajs/inertia-react";
import React,{useState,useEffect} from "react"
import Layout from "../Shared/Layout";
import { Inertia } from "@inertiajs/inertia";
const Home = ({ time, users, search }) => {
    console.log(users);
    const handleOnChange = (e) => {
        Inertia.get(
            "/users",
            { search: e.target.value },
            { preserveState: true }
        );
    };

    const userList = (
        <table>
            <th>Name</th>

            <tbody className="p-3">
                {users.data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                    </tr>
                ))}
                {!users.data.length && <p>No Users Has Found</p>}
            </tbody>
        </table>
    );

    return (
        <>
            <div style={{ height: "100vh" }}>
                <h1>Hello world homepage</h1>
                <h4>Time is {time}</h4>
                <input
                    type="text"
                    className="p-2 border-1 "
                    placeholder="Search..."
                    value={search}
                    onChange={handleOnChange}
                />
                {userList}

                <ul className="flex gap-x-3 ">
                    {users.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            preserveScroll
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-2 ${
                                link.active ? "bg-gray-700 text-white " : ""
                            }`}
                        ></Link>
                    ))}
                </ul>
            </div>
            <div className="preserve-scroll">
                <Link href="/" preserveScroll>
                    Refresh
                </Link>
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} title="Home Page" />;

export default Home;  