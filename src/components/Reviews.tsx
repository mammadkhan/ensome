import React, { useRef }  from 'react'
import style from '../style/Reviews.module.scss'
import { useDraggable } from "react-use-draggable-scroll";

import ReviewCard from './subcom/ReviewCard'

const Reviews: React.FC = () => {

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref,{
    applyRubberBandEffect: true,
  })

  return (
    <section className={style.reviews}>
        <h2>Glad to help your success</h2>
        <div className={style.reviewSlide} {...events} ref={ref}>
          <ReviewCard date="22 June 2020" heading="Sed ut perspiciatis unde omnis at vero blanditils" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..." tags={['Proxy','VPN']}/>
          <ReviewCard date="22 June 2020" heading="Sed ut perspiciatis unde omnis at vero blanditils" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..." tags={['Proxy','VPN']}/>
          <ReviewCard date="22 June 2020" heading="Sed ut perspiciatis unde omnis at vero blanditils" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..." tags={['Proxy','VPN']}/>
        </div>
        <button>Learn more</button>
    </section>
  )
}

export default Reviews