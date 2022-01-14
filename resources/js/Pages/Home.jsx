import React, { useCallback, useState } from "react";

import { Inertia } from "@inertiajs/inertia";
import Layout from "../Shared/Layout";
import { Link } from "@inertiajs/inertia-react";
import Paginator from "../Shared/Paginator";
import  debounce  from 'lodash/throttle';

// import { debounce } from 'lodash/throttle';

const Home = ({ time, users, search }) => {

    const [searchKeyWord, setsearchKeyWord] = useState("");

   
    
    const handleChange = (e) => {
      
        setsearchKeyWord(e.target.value);
            
        reduceReq(e.target.value);
    }
    const reduceReq = useCallback(debounce((value) =>
        Inertia.get("/users", { search: value }, { preserveState: true }),1000),[])

    // const reduceHttpReq = useCallback(
    //     debounce((nextValue) => {
           
    //     }, 500)
    // );

   

    const userList = (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                </tr>
           </thead>

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
                    value={searchKeyWord}
                    onChange={handleChange}
                />
                {userList}

                <Paginator links={users.links} />
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