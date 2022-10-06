import React from 'react'
import style from '../style/Hero.module.scss'

import graphic from '../images/001_illustration.png'
import { ReactComponent as Play } from '../images/icon_play_circle.svg'
import logos from '../images/partner logos/clients logos.png'

const Hero: React.FC = () => {
  return (
    <main className={style.hero}>
        <img className={style.graphic} src={graphic} alt="Data illustration" />
        <h1>Find true power in your data with Ensome</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eaque quibusdam nisi quos obcaecati id modi quae? Numquam officiis sint quos maxime, optio veritatis est, nisi perspiciatis esse nostrum eum.</p>
        <button className={style.learn}>Learn more</button>
        <button className={style.watch}><Play width="30" height="30"/>Watch the demo</button>
        <img className={style.logos} src={logos} alt="Company logos" />
    </main>
  )
}

export default Hero