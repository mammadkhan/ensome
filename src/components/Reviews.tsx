import React from 'react'
import style from '../style/Reviews.module.scss'
import ScrollContainer from 'react-indiana-drag-scroll'

import ReviewCard from './subcom/ReviewCard'

const Reviews: React.FC = () => {
  return (
    <section className={style.reviews}>
        <h2>Glad to help <br/> your success</h2>
        <ScrollContainer className={style.reviewSlide} horizontal={true}>
          <ReviewCard date="22 June 2020" heading="Sed ut perspiciatis unde omnis at vero blanditils" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..." tags={['Proxy','VPN']}/>
          <ReviewCard date="22 June 2020" heading="Sed ut perspiciatis unde omnis at vero blanditils" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..." tags={['Proxy','VPN']}/>
          <ReviewCard date="22 June 2020" heading="Sed ut perspiciatis unde omnis at vero blanditils" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..." tags={['Proxy','VPN']}/>
        </ScrollContainer>
        <button>Learn more</button>
    </section>
  )
}

export default Reviews