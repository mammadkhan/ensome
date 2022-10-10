import React from 'react'
import style from '../../style/subcom style/DiscoverCard.module.scss'

interface Props{
  icon:string
  heading:string
  text:string
  buttonText:string
}

const DiscoverCard: React.FC<Props> = (props) => {
  return (
    <div className={style.discoverCard}>
      <img className={style.image} src={props.icon} alt="Card icon" />
      <h2 className={style.heading}>{props.heading}</h2>
      <p className={style.text}>{props.text}</p>
      <button className={style.button}>{props.buttonText}</button>
    </div>
  )
}

export default DiscoverCard