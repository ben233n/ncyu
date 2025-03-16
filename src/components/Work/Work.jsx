import React from 'react'
import styles from './Work.module.css'
import { Link } from 'react-router-dom'
const Work = ({pp,img,id}) => {
  return (
    <div className={styles.bg}>
        <Link to={`/look/${id}`}>
        <img src={img} alt="" className={styles.img}/>
        </Link>
        <Link to={`/look/${id}`}>
          <p className={styles.p}>{pp}</p>
        </Link>
        
    </div>
  )
}

export default Work