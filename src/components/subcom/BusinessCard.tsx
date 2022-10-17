import React from 'react'
import style from '../../style/subcom style/BusinessCard.module.scss'

interface Props{
    image : string
    text : string
    author : string
    position : string
}

const BusinessCard: React.FC<Props> = (props) => {
  return (
    <div id="businessCard" className={style.businessCard} >
        <img className={style.image} src={props.image} alt="Avatar of author" />
        <p className={style.text}>{props.text}</p>
        <h3 className={style.author}>{props.author}</h3>
        <h4 className={style.position}>{props.position}</h4>
    </div>  
  )
}

export default BusinessCard