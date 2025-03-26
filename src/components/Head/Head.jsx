import React from 'react'
import styles from './Head.module.css'
import logo from '../../../public/logo.svg'
import menu from '../../../public/menu.svg'
import { Link } from 'react-router'
const Head = () => {
  
  return (
    <>
        <div className={styles.bg}>
          <div className={`${styles.container} container `}>
              <Link to="/">
              <img src={logo} alt="" className={styles.logo}/>
              </Link>
            
            <nav className={styles.nav}>    
              <Link to="/">
                <li className={styles.nav_li}>關於我們</li>
              </Link>
              <li className={styles.nav_li}>作品展示</li>
              <li className={styles.nav_li}>服務流程</li>
              <li className={styles.nav_li}>聯絡我們</li>
              <button className={styles.nav_QandA}>線上諮詢</button>
            </nav>
            <img src={menu} alt="" className={styles.menu}/>
          </div>
        </div>
    </>
  )
}

export default Head