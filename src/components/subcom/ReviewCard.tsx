import React from 'react'
import style from '../../style/subcom style/ReviewCard.module.scss'

interface Props{
  date : string
  heading : string
  text : string
  tags : string[]
}

const ReviewCard: React.FC<Props> = (props) => {
  return (
    <div className={style.reviewCard}>
      <p className={style.date}>{props.date}</p>
      <h3 className={style.heading}>{props.heading}</h3>
      <p className={style.text}>{props.text}</p>
      <div className={style.tagsContainer}>
        {props.tags.map((tag:string)=>{
          return(
            <p className={style.tag}>{tag}</p>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewCard