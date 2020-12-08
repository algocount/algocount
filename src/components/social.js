import React from "react"
import Button from "@material-ui/core/Button"

import socialStyles from "./social.module.css"

export default function Social({ children }) {
  return (
    <div className={`social ${socialStyles.social}`}>
      <p>Follow the project on social networks</p>
      <Button className={`socialItem1 ${socialStyles.socialItem1}`}>
        Twitter
      </Button>
      <Button className={`socialItem2 ${socialStyles.socialItem2}`}>
        Facebook
      </Button>
      <Button className={`socialItem3 ${socialStyles.socialItem3}`}>
        Youtube
      </Button>
      {children}
    </div>
  )
}
