import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/RightView.module.css'
import Track from './Track';

const RightView = (props) => {
  const {selectedFighter} = props
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    const getTracks = async () => {
      const response = await fetch('/api/tracks?tracks=' + selectedFighter.songs)
      const data = await response.json()
      setTracks(data)
    }

    getTracks();
  })
  
  return ( 
    <div className={styles.rightView}>
      <div className={styles.artistView}>
        {
          tracks.map((song, index) => {
            return(<Track track={song} key={index}/>)
          })
        }
      </div> 
    </div> 
  );
}
 
export default RightView;