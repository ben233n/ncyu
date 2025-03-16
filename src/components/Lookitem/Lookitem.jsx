import React from 'react'
import styles from './Lookitem.module.css'
const Lookitem = ({img,word,article}) => {
  return (
    <div className={styles.bg}>
      <div className={`container ${styles.container} `}>
        <img src={img} alt="asa"  className={styles.img}/>
        <div className={styles.rightside}>
          <div className={styles.text}>
            <h2 className={styles.h2}>{word}</h2>
            <p className={styles.p}>{article}</p>
            <button className={styles.button}>添加收藏 ★</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lookitem