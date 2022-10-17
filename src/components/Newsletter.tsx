import React from 'react'
import style from '../style/Newsletter.module.scss'

const Newsletter: React.FC = () => {
    return(
        <section className={style.newsletter}>
            <h2>Subscribe to our newsletter</h2>
            <input type="email" placeholder='Your email'/>
            <button className={style.submit}>Subscribe</button>
        </section>
    )
}

export default Newsletter