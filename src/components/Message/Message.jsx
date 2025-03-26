import React from 'react'
import styles from './Message.module.css'
import Star from "../../assets/star.svg?react";
const Message = ({usename,speak,star}) => {
  return (
    <>
        <div className={styles.bg}>
            <div>
                <h3 className={styles.h3}>{usename}</h3>
                <p className={styles.p}>{speak}</p>
            </div>
            <div className={styles.star_div}>
                {
                    Array.from({length:5},(_,index)=>(
                        <Star key={index} className={star>index?styles.icon:styles.no_icon}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Message