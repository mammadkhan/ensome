import React from 'react'
import style from '../style/Statistics.module.scss'


const Statistics: React.FC = () => {
  return (
    <section className={style.statistics}>
      <div className={style.measure}>
        <b>1830+</b>
        <p>Project executed</p>
      </div>
      <div className={style.measure}>
        <b>220</b>
        <p>Data analytics</p>
      </div>
      <div className={style.measure}>
        <b>390</b>
        <p>Data management</p>
      </div>
      <div className={style.measure}>
        <b>834+</b>
        <p>Satisfied customers</p>
      </div>
    </section>
  )
}

export default Statistics