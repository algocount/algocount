import React from "react"


import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

import cariplo from "../assets/cariplo.svg"
import density from "../assets/density.svg"
import unimi from "../assets/unimi.svg"
import polimi from "../assets/polimi.svg"


import footerStyles from "./footer.module.css"

export default function Footer({ children }) {
  return (
    <div className={`footer ${footerStyles.footer}`}>
      <div className={`footer ${footerStyles.footerContent}`}>
        <div className={`footer ${footerStyles.footerItem1}`}>
          <p>Founded by:</p>
              <a><img src={cariplo}  className="logo" alt="Logo" /></a>
        </div>
        <div className={`footer ${footerStyles.footerItem2}`}>
        <p>Partners</p>
        <div style={{display:"inline"}}>
        <a href="https://www.unimi.it/it"><img src={unimi} alt="Logo" className="logo"  /></a>
        <a href="https://www.polimi.it"><img src={polimi} alt="Logo" className="logo"  /></a>
        <a href="https://www.densitydesign.org"><img src={density} alt="Logo" className="logo" /></a>
        </div>
        </div>
        <div className={`footer ${footerStyles.footerItem3}`}>
        <p>Contacts</p>

        <p style={{marginTop:'20px', marginBottom:'20px'}}><a href="mailto:algocountproject@gmail.com">algocountproject@gmail.com</a></p>
        <div className={`footer ${footerStyles.socialIcons}`}>
        <a href="https://twitter.com/algocount"><FaTwitter /></a>
        <a href="https://twitter.com/algocount"><FaFacebook /></a>
        <a href="https://twitter.com/algocount"><FaYoutube /></a>
        </div>
        </div>
      </div>
      {children}
    </div>
  )
}
