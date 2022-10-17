import React from 'react'
import style from '../style/Contacts.module.scss'

const Contacts: React.FC = () => {
  return (
    <section className={style.contacts}>
      <h2>Left questions? Contact us now for a free consultation and free trial!</h2>
      <div className={style.infoCont}>
        <p className={style.label}>Email address</p>
        <p className={style.info}>ensome@info.co.us</p>
      </div>
      <div className={style.infoCont}>
        <p className={style.label}>Phone number</p>
        <p className={style.info}>+1601-201-5580</p>
      </div>
      <div className={style.infoCont}>
        <p className={style.label}>Address</p>
        <p className={style.info}>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</p>
      </div>
      <button className={style.contactUsButton}>Contact us</button>
    </section>
  )
}

export default Contacts