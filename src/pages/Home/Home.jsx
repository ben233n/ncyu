import React from 'react'
import Foot from '../../components/Foot/Foot'
import Head from '../../components/Head/Head'
import Case from '../../components/Case/Case'
import Big from '../../components/Big/Big'
import Air from '../../components/Air/Air'
import { Link } from 'react-router-dom'
import imgdata from '../../json/data.json'


const Home = () => {
  return (
    <>
        <Head/>
        <Air/>
        <Case items={imgdata}/>

        <Foot/>
    </>
  )
}

export default Home