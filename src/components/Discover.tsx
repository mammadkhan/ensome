import React from 'react'
import style from '../style/Discover.module.scss'
import DiscoverCard from './subcom/DiscoverCard'

import graphic from '../images/002_illustration.png'
import graphic2 from '../images/003_illustration.png'

const Discover = () => {
  return (
    <section className={style.discover}>
      <DiscoverCard icon={graphic} heading="The newest business analytics platform" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." buttonText='Discover more' />
      <DiscoverCard icon={graphic2} heading="Radically new data solutions" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." buttonText='Discover more' />
    </section>
  )
}

export default Discover