import React, { useRef }  from 'react'
import { useDraggable } from "react-use-draggable-scroll";
import style from '../style/Business.module.scss'
import BusinessCard from './subcom/BusinessCard'

import arrow from '../images/arrow.png'
import person1 from '../images/001_img_person_1.png'
import person2 from '../images/002_img_person_2.png'

const Business: React.FC = () => {

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref,{
    applyRubberBandEffect: true,
    isMounted:true
  })

  const leftArrow = () => {
    ref.current.style.scrollBehavior = 'smooth'
    const card = document.querySelector('#businessCard') as HTMLDivElement | null;
    ref.current.scrollLeft -= (card?.offsetWidth as number + 0.9 * parseFloat(getComputedStyle(document.documentElement).fontSize) as number) + 15;
    ref.current.style.scrollBehavior = 'initial'
  }

  const rightArrow = () => {
    ref.current.style.scrollBehavior = 'smooth'
    const card = document.querySelector('#businessCard') as HTMLDivElement | null;
    ref.current.scrollLeft += (card?.offsetWidth as number + 0.9 * parseFloat(getComputedStyle(document.documentElement).fontSize) as number) + 15;
    ref.current.style.scrollBehavior = 'initial'
  }

  return (
    <section className={style.business}>
        <h2>Trusted by the best in the business</h2>
        <div className={style.controls}>
            <button id="left" onClick={()=>{leftArrow()}} className={style.left}><img src={arrow} alt="Arrow" /></button>
            <button id="right" onClick={()=>{rightArrow()}}><img src={arrow} alt="Arrow" /></button>
        </div>
        <div className={style.businessSlide} {...events} ref={ref}>
            <BusinessCard image={person1} text="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” " author='Alex Bern' position='CEO by PixelPerfect'/>
            <BusinessCard image={person2} text="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” " author='Alex Bern' position='CEO by NOX'/>
        </div>
    </section>
  )
}

export default Business