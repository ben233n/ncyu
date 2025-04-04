import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // 引入 dispatch 用來觸發 Redux action
import { addItem } from '../../redux/cartSlice'; // 引入 Redux 的 addItem action
import styles from './Lookitem.module.css';

const Lookitem = ({ img, word, article, like }) => {
  const [bang, setBang] = useState(like); // 初始的點讚數
  const [islove, setIslove] = useState(true); // 判斷是否已經點過讚
  const dispatch = useDispatch(); // 初始化 dispatch 來執行 action

  // 點讚處理函數
  const loveAsk = () => {
    if (islove) {
      setBang(bang + 1); // 點讚，數量增加
      setIslove(false);  // 變更狀態為已點讚
    } else {
      setBang(bang - 1); // 取消點讚，數量減少
      setIslove(true);   // 變更狀態為未點讚
    }
  };

  // 預約處理函數，將商品名稱和圖片加入購物車
  const handleReservation = () => {
    const item = {
      name: word,  // 商品名稱
      img: img,    // 商品圖片
    };
    dispatch(addItem(item));  // 使用 Redux 的 addItem action，將商品加入購物車
  };

  return (
    <div className={styles.bg}>
      <div className={`container ${styles.container}`}>
        <img src={img} alt="商品" className={styles.img} />
        <div className={styles.rightside}>
          <div className={styles.text}>
            <h2 className={styles.h2}>{word}</h2>
            <p className={styles.p}>{article}</p>
            <div className={styles.div_love}>
              <svg onClick={loveAsk} className={styles.love} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_40_336)">
                  <path style={{ fill: islove ? "#9FA69E" : "#606861" }} d="M8.60572 3.92055C6.9039 3.9198 5.32856 4.46307 4.18656 5.53196C3.04486 6.59978 2.35588 8.18922 2.35578 10.1703C2.35593 12.2487 3.81809 14.1812 5.79822 16.078C7.77874 17.9756 10.3265 19.8479 12.6584 21.7915C12.7959 21.9016 13.0101 21.9006 13.147 21.7909C15.4781 19.8488 18.0209 17.9703 20.0068 16.0786C21.9944 14.1868 23.4737 12.2709 23.4743 10.1704C23.4745 8.16766 22.7613 6.59483 21.6187 5.53147C20.4761 4.4681 18.9242 3.92074 17.2241 3.91988C15.4751 3.9202 13.9974 5.02324 12.9028 6.14144C11.8127 5.02978 10.3512 3.92043 8.60572 3.92055Z" />
                </g>
              </svg>
              <p>{bang}</p>
            </div>
            <button onClick={handleReservation} className={styles.button}>線上預約</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookitem;