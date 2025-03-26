import React from 'react'
import { useParams } from 'react-router-dom'
import dataimg from '../../json/data.json'
import Work from '../../components/Work/Work';
import Head from '../../components/Head/Head';
import Foot from '../../components/Foot/Foot';
import Air from '../../components/Air/Air';
import Lookitem from '../../components/Lookitem/Lookitem';
import Message from '../../components/Message/Message';
import styles from './Look.module.css'
const Look = () => {
  const { id } = useParams(); // 獲取路由中的 id 參數

  // 根據 id 過濾出對應的資料
  const lookData = dataimg.find(item => item.id === id);
  if(!lookData){
    return (
      <>
        <div>沒檔案</div>
      </>
    )
  }


  return (
    <>
      <Head/>
      <Air/>
      <Lookitem img={lookData.photoPath} word={lookData.name} article={lookData.article} like={lookData.like}/>
      
      <div className={styles.bg}>
          <div className={`container ${styles.container} `}>

            {
              lookData.message.map((item)=>(
                <Message speak={item.speak} usename={item.usename} star={item.star}/>
              ))
            }
    
    
          </div>
      </div>
      <Foot/>
    </>
  )
}

export default Look