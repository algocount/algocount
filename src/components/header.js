import React from "react"
import headerStyles from "./header.module.css"
import Logop5 from "./Logop5.js"

export default function Container({ children }) {
  return (
    <div>
      <div className={`header ${headerStyles.header}`}>
        <h1>Algocount</h1>
        <h2>
          Public Perception of Algorithms in Society. 
          <br />Accounting for the
          Algorithmic Public Opinion
        </h2>
      </div>
      <div className={`header ${headerStyles.centered}`}>
        <Logop5 />
      </div>

      {children}
    </div>
  )
}
