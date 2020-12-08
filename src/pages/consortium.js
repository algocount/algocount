import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"

import "../styles/global.css"

import containerStyles from "../components/container.module.css"

export default function Consortium() {
  return (
    <Layout>
      <Container>
        <main>
          <div className="intro">
            <p>THE RESEARCH TEAM</p>
            <div className="groups">
              <h2>Beneficiary</h2>
              <div className="groups1">
                <h3>
                  <a>
                    University of Milan. Department of Social
                    and Political Sciences.
                  </a>
                </h3>
                <h4 style={{ marginTop: "3vh" }}>Scientific Coordinator</h4>
                <p>Dr. Alessandro Gandini</p>
              </div>
              <div className="groups2">
              <h4 style={{ marginTop: "3vh" }}>Research Team</h4>
                <p>Lorenzo Mosca - <em>Project Coordinator</em></p> 
                <p>Luisa Leonini - <em>Team Member</em></p> 
                <p>Marco Orofino - <em>Team Member</em></p> 
                <p>Alessandro Provetti - <em>Team Member</em></p> 
                <p>Sergio Splendore - <em>Team Member</em></p> 
              </div>
            </div>

            <div className="groups">
              <h2>Partner</h2>
              <div className="groups1">
                <h3>
                  <a>
                    Politecnico di Milano <br /> DensityDesign Research Lab
                  </a>
                </h3>
                <h4 style={{ marginTop: "3vh" }}>Co - Coordinator</h4>
                <p>Dr. Michele Mauri</p>
              </div>
              <div className="groups2">
              <h4 style={{ marginTop: "3vh" }}>Research Team</h4>
                <p>
                  <a>Beatrice Gobbo</a> - <em>PhD Student</em>
                </p>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  )
}
