import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import Phases from "../components/phases"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout>
      <Container>
        <main>
          <div className="parallax">
            <div className="introCont">
              <Header />

              <div id="group2" className="parallaxGroup">
                <div className="parallaxLayer parallaxLayerBase square1"></div>
                <div className="parallaxLayer parallaxLayerBase square2"></div>
                <div className="parallaxLayer parallaxLayerBack" style={{ bottom: "90%" }}>
                </div>
                <div className="intro" style={{ zIndex: "999999" }}>
                    <h1>
                      The Public Perception of Algorithms in Society: Accounting
                      for the Algorithmic Public Opinion.
                    </h1>
                    <h1>
                      Algocount project seeks to expand our current
                      understanding of, and raise awareness about, the role of
                      algorithms in society, with a specific focus on the
                      formation of public opinion in the Italian context.
                    </h1>
                  </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  )
}
