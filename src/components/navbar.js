import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.css"
import items from "./menu-items.json"

export default function Navbar({ background }) {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0]
    if (menu) {
      body.classList.add("menu-is-open")
    } else {
      body.classList.remove("menu-is-open")
    }
  }, [menu])
  return (
    <div
      className={["position-sticky", navbarStyles.navbar].join(" ")}
      style={{}}
    >
      <div>
        <div
          className={[
            navbarStyles.items,
            menu ? navbarStyles.open : navbarStyles.closed,
          ].join(" ")}
        >
          {items
            .filter(i => i.menues.indexOf("main") > -1)
            .map(item => {
              return (
                <Link key={item.label} to={item.url}>
                  {item.label}
                </Link>
              )
            })}
        </div>
        <button
          aria-label="Toggle menu"
          className={[
            "pointer",
            navbarStyles.toggle,
            menu ? navbarStyles.open : navbarStyles.closed,
          ].join(" ")}
          onClick={() => setMenu(!menu)}
          onKeyDown={() => setMenu(!menu)}
        >
          <span className={navbarStyles.menuIcon} />
        </button>
      </div>
    </div>
  )
}

Navbar.defaultProps = {}
