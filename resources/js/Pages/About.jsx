import Nav from "../Shared/Nav"
import React from "react"
import { usePage } from "@inertiajs/inertia-react";

const Home = () => {
  const { auth } = usePage().props;
  
  console.log(auth)

  return (
      <>
          <Nav />
          <h2>Hello About us</h2>
          <h4>
              Share user from inertia midddleware is
              <span className="text-green-400 text-2xl">{auth.name}</span>
          </h4>
      </>
  );
}
export default Home;  