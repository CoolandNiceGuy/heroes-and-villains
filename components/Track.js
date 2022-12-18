import styles from '../styles/Track.module.css'
const Track = ({track}) => {

  const features = track.credits.split(", ")
  const x = track.name.split(' (')[0]
  return ( 
    <a href={track.external_urls.spotify} className={styles.trackLink}>
    <div className={styles.track}>
      <div className={styles.title}>
      {track.name}
      </div>
      <div className={styles.shortTitle}>
        {/* this is the ugliest function call ive ever written */}
      {x}
      </div>
      <div className={styles.featureContainer}>
      {features.map((element, index) => {
        return (
          <a href={track.external_urls[element]} key={index}>{element}</a>
        )
      })}
      </div>
    </div>
    </a>
   );
}
 
export default Track;