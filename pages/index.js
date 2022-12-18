import Head from 'next/head'
import { useState } from 'react'
import Body from '../components/body'
import Header from '../components/header'
import MobileView from '../components/MobileView'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Header/>
      <Body/>
      <MobileView/>
    </div>
  )
}
