import React from "react"
import Nav from "./Nav"
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      
      <section>
        {children}
      </section>
      </>
   
  )
}
export default Layout;