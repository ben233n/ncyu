import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Head from './components/Head/head'
import Big from './components/Big/Big'
import New from './components/New/New'
import Case from './components/Case/Case'
import Foot from './components/Foot/foot'


function App() {

  return (
    <>
      <Head/>
      <Big/>
      <New/>
      <Case/>
      <Foot/>
    </>
  )
}

export default App
