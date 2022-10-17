import React from 'react'
import Burger from './Burger'
import style from '../style/Header.module.scss'

import logo from '../images/logo_blue.png'
import burger from '../images/Vector.png'


const Header: React.FC = () => {
    return(
        <header className={style.header}>
            <Burger />
            <a href="/"><img src={logo} alt="" /></a>
            <button className={style.burger}><img src={burger} alt="" /></button>
        </header>
    )
}

export default Header