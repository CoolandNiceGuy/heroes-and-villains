import { useState, useEffect } from "react";
import styles from '../styles/FighterSelect.module.css'
import GridItem from "./GridItem";

const FighterSelect = (props) => {
  const [artists, setArtists] = useState()
  const {onClick, selectedFighter} = props


  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch('/api/artists');
      const data = await response.json()
      setArtists(data)
    }

    fetchArtists();
  },[])

  return ( 
    <div className={styles.fighterSelect}>
      {
        artists &&
        Object.keys(artists).map(artist => {
        return(
          <GridItem 
            key={artists[artist].name} 
            onClick={(artist) => onClick(artist)} 
            artist={artists[artist]} 
            selected={selectedFighter && (artists[artist].name === selectedFighter.name)}
          />
        )
      })}
    </div> 
  );
}
 
export default FighterSelect;