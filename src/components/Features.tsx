import React, { useRef } from 'react'
import style from '../style/Features.module.scss'

import Card from './subcom/Card'

import brain from '../images/icons/icon_brain_circuit.svg'
import trend from '../images/icons/icon_arrow_trending_lines.svg'
import key from '../images/icons/icon_key.svg'
import { useDraggable } from "react-use-draggable-scroll";


const Features: React.FC = () => {
  
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref,{
    applyRubberBandEffect: true,
  })

  return (
    <section className={style.features}>
        <h2>Why our clients choose Ensome?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam.</p>
        <div className={style.cardSlide} {...events} ref={ref}>
            <Card icon={brain} heading="Machine learning" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam."/>
            <Card icon={trend} heading="Embed analytics" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam."/>
            <Card icon={key} heading="Access control" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro explicabo facere error cum perspiciatis alias nisi rem pariatur ullam."/>
        </div>
    </section>
  )
}

export default Features