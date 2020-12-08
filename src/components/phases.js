import React from "react"
import Button from "@material-ui/core/Button"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import phasesStyles from "./phases.module.css"

export default function Phases({ children }) {
  return (
    <div className={`phases ${phasesStyles.phases}`}>
      <Button className={`phasesItem1 ${phasesStyles.phasesItem1}`}>
        <AnchorLink to="#phase1" title="Digital Methods" />
      </Button>

      <Button className={`phasesItem2 ${phasesStyles.phasesItem2}`}>
        <AnchorLink to="#phase2" title="Qualitative Interviews" />
      </Button>

      <Button className={`phasesItem3 ${phasesStyles.phasesItem3}`}>
        <AnchorLink to="#phase3" title="Communication" />
      </Button>

      {children}
    </div>
  )
}
