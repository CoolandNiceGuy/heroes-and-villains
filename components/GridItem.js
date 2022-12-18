import styles from '../styles/GridItem.module.css'
const GridItem = (props) => {

  const { artist, onClick, selected} = props
  return ( <div><img src={artist.thumbnailUrl} className={(selected)? styles.selected:styles.thumbNail} onClick={() => onClick(artist)}/></div> );
}
 
export default GridItem;