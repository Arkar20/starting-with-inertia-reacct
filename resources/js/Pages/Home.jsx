import { Link } from "@inertiajs/inertia-react";
import React from "react"
const Home = () => {
  return (
    <>
      <h1>Hello world homepage</h1>
      <ul>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/signout" data={{foo:"Bar"}} method="post" as="button">Logout Page</Link></li>
      </ul>
    </>
  )
}
export default Home;  