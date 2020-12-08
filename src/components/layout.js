import React from "react"
import "../styles/global.css"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div>
    <Navbar  />
      {children}

      <Footer />
    </div>
  )
}
