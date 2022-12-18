import styles from '../styles/FlipCard.module.css'
import Image from 'next/image';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Track from './Track';


const FlipCard = ({artist}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [tracks, setTracks] = useState([])

  const getTracks = async () => {
    const response = await fetch('/api/tracks?tracks=' + artist.songs)
    const data = await response.json()
    setTracks(data)
  }

  const handleFlip = () => {
    getTracks()
    setIsFlipped(!isFlipped)
  }

  const createShortTitle = (title) => {
    return title.split(' (')[0]
  }



  return ( 
    <div className={styles.flipCard} onClick={handleFlip}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleFlip}>
          <div className={styles.flipCardFront}>
            <Image src={artist.comicUrl} layout="fill" className={styles.mobileComicImage} alt={artist.name}/>
          </div>
        </div>

        <div onClick={handleFlip}>
          <div className={(artist.name === 'Metro Boomin')? styles.flipCardBackMetro:styles.flipCardBack}>
            {
              artist.name !== 'Metro Boomin' &&
              <div style={{paddingBottom: '1.5rem'}}>
                <p className={styles.artistName}>{artist.name}</p>
                <img src={artist.thumbnailUrl} alt={artist.name} className={styles.artistPic}/>
              </div>
            }
            {
              artist.name === 'Metro Boomin' &&
              <div>
              <p className={styles.artistName}>{artist.name}</p>
              <img src="https://pbs.twimg.com/media/FiMpxICUcAIFf0p?format=jpg&name=large" alt="metro boomin" className={styles.boominImage}/>
              </div>
            }
            {
              tracks.map((song, index) => {
                if(artist.name === 'Metro Boomin'){
                  return (
                    <div className={styles.metroContainer} key={index}>
                      <p className={styles.songName}>{createShortTitle(song.name)}</p>
                    </div>
                  )
                }
                return(
                <div key={index} className={styles.cardSongContainer}>
                  <a className={styles.songName} href={song.external_urls.spotify}>{createShortTitle(song.name)}</a>
                  <p className={styles.features}>
                  {
                    song.credits
                  }
                  </p>
                </div>
                )
              })
            }
          </div>
        </div>
      </ReactCardFlip>
    </div>
   );
}
 
export default FlipCard;