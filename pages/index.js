import Body from '../components/Body'
import Header from '../components/Header'
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
