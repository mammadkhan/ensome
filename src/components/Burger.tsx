import React from 'react'
import style from '../style/subcom style/Burger.module.scss'

import Logo from '../images/Logo.png'

import close from '../images/icons/icon_close.png'
import down from '../images/icons/icon_down.png'
import right from '../images/icons/icon_arrow_right.png'

import { ReactComponent as Facebook } from '../images/icons/icon_facebook.svg'
import { ReactComponent as Twitter } from '../images/icons/icon_twitter.svg'
import { ReactComponent as Linkedin } from '../images/icons/icon_linkedin.svg'
import { ReactComponent as Youtube } from '../images/icons/icon_youtube.svg'
import { ReactComponent as Dribbble } from '../images/icons/icon_dribbble.svg'
import { ReactComponent as Behance } from '../images/icons/icon_behance.svg'

const Burger: React.FC = () => {
  return (
    <div className={style.burger}>
        <div className={style.header}>
            <a href="/"><img src={Logo} alt="Company logo" /></a>
            <button className={style.closeBtn}><img src={close} alt="Close button" /></button>
        </div>
        <div className={style.navigation}>
            <div className={style.label}>
                <h3>Home</h3>
                <img src={down} alt="Arrow down icon" />
            </div>
            <ul className={style.menu}>
                <li><a href="/">Home 1 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Home 2 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Home 3 <span><img src={right} alt="" /></span></a></li>
            </ul>
            <div className={style.label}>
                <h3>Solutions</h3>
                <img src={down} alt="Arrow down icon" />
            </div>
            <ul className={style.menu}>
                <li><a href="/">Solution 1 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Solution 2 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Solution 3 <span><img src={right} alt="" /></span></a></li>
            </ul>
            <div className={style.label}>
                <h3>Pages</h3>
                <img src={down} alt="Arrow down icon" />
            </div>
            <ul className={style.menu}>
                <li><a href="/">Page 1 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Page 2 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Page 3 <span><img src={right} alt="" /></span></a></li>
            </ul>
            <div className={style.label}>
                <h3>Elements</h3>
                <img src={down} alt="Arrow down icon" />
            </div>
            <ul className={style.menu}>
                <li><a href="/">Element 1 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Element 2 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Element 3 <span><img src={right} alt="" /></span></a></li>
            </ul>
            <div className={style.label}>
                <h3>Blog</h3>
                <img src={down} alt="Arrow down icon" />
            </div>
            <ul className={style.menu}>
                <li><a href="/">Blog 1 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Blog 2 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Blog 3 <span><img src={right} alt="" /></span></a></li>
            </ul>
            <div className={style.label}>
                <h3>Contacts</h3>
                <img src={down} alt="Arrow down icon" />
            </div>
            <ul className={style.menu}>
                <li><a href="/">Contact 1 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Contact 2 <span><img src={right} alt="" /></span></a></li>
                <li><a href="/">Contact 3 <span><img src={right} alt="" /></span></a></li>
            </ul>
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
    </div>
  )
}

export default Burger