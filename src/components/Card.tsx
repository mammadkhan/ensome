import React from 'react'
import style from '../style/Card.module.scss'

interface Props{
    icon : string
    heading : string
    text : string
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className={style.card}>
        <img src={props.icon} alt="Card icon" />
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
  )
}

export default Card