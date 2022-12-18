import { useEffect, useState } from 'react'
import styles from '../styles/MobileView.module.css'
import FlipCard from './FlipCard'
import Carousel from 'react-material-ui-carousel'


const MobileView = () => {
  const [artists, setArtists] = useState([])


  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch('/api/artists');
      const data = await response.json()
      setArtists(data)
    }

    fetchArtists();
  },[])


  return ( 
    <div className={styles.mobileView}>
      <p className={styles.mobileTitle}>Heroes and Villains</p>
      <Carousel autoPlay={false} animation="slide" className={styles.carousel}>
      {
      artists &&
      Object.keys(artists).map((artistKey, index) => {
        return(
          <FlipCard artist={artists[artistKey]} key={index}/>
        )
      })}
      </Carousel>
      <p className={styles.footerText}>swipe to choose your side</p>
    </div>
   );
}
 
export default MobileView;