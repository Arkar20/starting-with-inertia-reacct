import { Link } from "@inertiajs/inertia-react";
import React from "react"
const Home = ({time}) => {
  return (
      <>
          <div style={{ height: "100vh" }}>
              <h1>Hello world homepage</h1>
              <h4>Time is {time}</h4>
              <ul>
                  <li>
                      <Link href="/about">About Us</Link>
                  </li>
                  <li>
                      <Link
                          href="/signout"
                          data={{ foo: "Bar" }}
                          method="post"
                          as="button"
                      >
                          Logout Page
                      </Link>
                  </li>
              </ul>
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