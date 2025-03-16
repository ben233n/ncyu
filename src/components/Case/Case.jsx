import React from 'react'
import styles from './Case.module.css'
import Work from '../Work/Work'
import { Link } from 'react-router-dom'

const Case = ({items}) => {
  return (
    <>
      <div className={styles.bg_up}>
          <h2 className={styles.up_h2}>精選案例</h2>
          <p className={styles.up_p}>家的故事在庭園綻放，成就每一個經典的案例</p>
      </div>
      <div className={styles.down}>
          <div className={`${styles.container} container `}>
          {items.map((item) => (
              <Work key={item.id} img={item.photoPath} pp={item.name} id={item.id}/>
            
          ))}
          </div>
        </div>
    </>
  )
}

export default Case