import React from 'react'
import style from '../style/Features.module.scss'

import Card from './Card'

import brain from '../images/icons/icon_brain_circuit.svg'
import trend from '../images/icons/icon_arrow_trending_lines.svg'

const Features: React.FC = () => {
  return (
    <section className={style.features}>
        <h2>Why our clients choose Ensome?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam.</p>
        <div className={style.cardSlide}>
            <Card icon={brain} heading="Machine learning" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam."/>
            <Card icon={trend} heading="Embed analytics" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam."/>
        </div>
    </section>
  )
}

export default Features