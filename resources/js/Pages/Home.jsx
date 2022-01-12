import { Link } from "@inertiajs/inertia-react";
import Nav from "../Shared/Nav";
import React from "react"

const Home = ({time}) => {
  return (
    <>
      <Nav />
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
export default Home;  