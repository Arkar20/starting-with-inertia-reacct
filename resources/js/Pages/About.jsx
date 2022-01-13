import Layout from "../Shared/Layout"
import React from "react"
import { usePage } from "@inertiajs/inertia-react";

const About = () => {
  const { auth } = usePage().props;
  

  return (
      <>
         
          <h2> About us</h2>
          <h4>
              Share user from inertia midddleware is
              <span className="text-green-400 text-2xl">{auth.name}</span>
          </h4>
      </>
  );
}
About.layout = (page) => <Layout children={page} title="About Page" />;

export default About;  