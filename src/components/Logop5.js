import React, { Component } from "react"
import { loadableP5 as P5Wrapper } from "./loadable.js"
import Logo3D from "./Logo3D"

export default class Logop5 extends Component {
  render() {
    return <P5Wrapper sketch={Logo3D} />
  }
}
