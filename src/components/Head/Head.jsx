import React from 'react'
import styles from './Head.module.css'
import logo from '../../../public/logo.svg'
import { Link } from 'react-router'
import Cart from '../Cart/Cart'
import Menu from '../../assets/menu.svg?react';
import { useMediaQuery } from 'react-responsive';
const Head = () => {
  const isNotTablet = useMediaQuery({ query: '(max-width: 576px), (min-width: 992px)' });
  
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
              {!isNotTablet &&<Cart />}
            </nav>
            
            <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
              {isNotTablet &&<Cart/>}
              <Menu className={styles.menu}/>
            </div>

          </div>
        </div>
    </>
  )
}

export default Head