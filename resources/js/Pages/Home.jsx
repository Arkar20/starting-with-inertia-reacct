import { Link } from "@inertiajs/inertia-react";
import React from "react"
import Layout from "../Shared/Layout";
const Home = ({time}) => {
    return (
      <>
          <div style={{ height: "100vh" }}>
              <h1>Hello world homepage</h1>
              <h4>Time is {time}</h4>
              
          </div>
          <div className="preserve-scroll">
              <Link href="/" preserveScroll>
                  Refresh
              </Link>
            </div>
        </>
  );
}

Home.layout = (page) => <Layout children={page} title="Home Page" />;

export default Home;  