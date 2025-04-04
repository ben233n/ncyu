import React from "react";
import { useDispatch, useSelector } from 'react-redux';  // 使用 useSelector 來讀取 Redux store
import { removeItem } from '../../redux/cartSlice';  // 引入 removeItem action
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Cart.module.css";
import Cartimg from '../../assets/Cartimg.svg?react';
import Garbage from '../../assets/delete.svg?react';


const Cart = () => {
  const dispatch = useDispatch();  // 初始化 dispatch 來執行 action
  const cartItems = useSelector(state => state.cart.items);  // 從 Redux store 中取得購物車中的所有商品

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));  // 當點擊 "刪除" 按鈕時，移除指定的商品
  };

  const [showCart, setShowCart] = React.useState(false);  // 控制購物車視窗是否顯示

  return (
    <div className={styles.container}>
      {/* 購物車圖示，點擊可開啟/關閉購物車內容視窗 */}
      <div className={styles.cartIcon} onClick={() => setShowCart(!showCart)}>
        <Cartimg className={styles.cartimg}/>
        {/* 若購物車有商品，顯示紅色數字圈 */}
        {cartItems.length > 0 && <span className={styles.cartCount}>{cartItems.length}</span>}
      </div>

      {/* 使用 AnimatePresence 搭配 Motion 實現購物車視窗的進出動畫 */}
      <AnimatePresence>
        {showCart && (
          <motion.div 
            className={styles.cartModal}
            initial={{ opacity: 0, y: -20 }} // 初始狀態：透明且略往上偏移
            animate={{ opacity: 1, y: 0 }}   // 動畫狀態：顯示且回歸原位
            exit={{ opacity: 0, y: -20 }}    // 離開動畫：變透明且往上偏移
            transition={{ duration: 0.3 }}    // 動畫持續時間 0.3 秒
          >
            <div className={styles.cartHeader}>
              <p className={styles.h3}>預約清單</p>
              <button className={styles.closeButton} onClick={() => setShowCart(false)}>✖</button>
            </div>
            <ul>
              {/* 顯示每個加入購物車的商品 */}
              {cartItems.map((item, index) => (
                <li key={index}  className={styles.addgoods}>
                  <div className={styles.addgoods_item}>
                    <div className={styles.img_div}>
                      <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%' }} />  {/* 顯示商品圖片 */}
                    </div>
                    {item.name}  {/* 顯示商品名稱 */}
                  </div>

                  

                  {/* 刪除商品按鈕 */}
                    <Garbage className={styles.garbage} onClick={() => handleRemoveItem(item)}/>
                </li>
              ))}
              {cartItems.length > 0 ? <button className={styles.button}>確定預約</button>:<p className={styles.no}> - 目前尚無預約 -</p>}
              
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;