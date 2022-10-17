import React,{useState} from 'react'
import style from '../style/Footer.module.scss'

import logo from '../images/logo_blue.png'
import down from '../images/icons/icon_down.png'

import { ReactComponent as Facebook } from '../images/icons/icon_facebook.svg'
import { ReactComponent as Twitter } from '../images/icons/icon_twitter.svg'
import { ReactComponent as Linkedin } from '../images/icons/icon_linkedin.svg'
import { ReactComponent as Youtube } from '../images/icons/icon_youtube.svg'
import { ReactComponent as Dribbble } from '../images/icons/icon_dribbble.svg'
import { ReactComponent as Behance } from '../images/icons/icon_behance.svg'

const Footer: React.FC = () => {

  const [menu,setMenu] = useState<String>("")

  const menuClick = (menuName:string) => {
    setMenu(menuName)
    if(menu === menuName){
      setMenu("")
    }
  }

  return (
    <footer className={style.footer}>
        <a href="/"><img src={logo} alt="Company logo" /></a>
        <div className={style.navigation}>
          <div className={style.label} onClick={()=>{menuClick('service')}}>
            <h3>Service</h3>
            <img src={down} alt="Arrow down icon" />
          </div>
          {menu === "service" && 
          <ul className={style.menu}>
            <li><a href="/">Pages</a></li>
            <li><a href="/">Elements</a></li>
            <li><a href="/">Site map</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>}
          <div className={style.label} onClick={()=>{menuClick('information')}}>
            <h3>Information</h3>
            <img src={down} alt="Arrow down icon" />
          </div>
          {menu === "information" && 
          <ul className={style.menu}>
            <li><a href="/">Contacts</a></li>
            <li><a href="/">Our team</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>}
          <div className={style.label} onClick={()=>{menuClick('about')}}>
            <h3>About</h3>
            <img src={down} alt="Arrow down icon" />
          </div>
          {menu === "about" && 
          <ul className={style.menu}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Solutions</a></li>
          </ul>}
        </div>
        <div className={style.followUs}>
          <h3>Follow us</h3>
          <div className={style.socials}>
            <a href="/"><Facebook /></a>
            <a href="/"><Twitter /></a>
            <a href="/"><Linkedin /></a>
            <a href="/"><Youtube /></a>
            <a href="/"><Dribbble /></a>
            <a href="/"><Behance /></a>
          </div>
        </div>
        <div className={style.legal}>
          <a href="/">Privacy policy</a>
          <a href="/">Terms of use</a>
        </div>
        <div className={style.copyright}>
          <p>Ensome© 2022 All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer