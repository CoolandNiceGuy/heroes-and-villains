import styles from '../styles/LeftView.module.css'
import FighterName from './FighterName';
import Image from 'next/image';
const LeftView = (props) => {
  const {selectedFighter} = props
  return ( 
    <div className={styles.leftView}>
      <Image 
        src={selectedFighter.comicUrl} 
        className={styles.avatarImage} 
        alt={selectedFighter.name} 
        width="600" height="749" 
        // layout="responsive"
        priority={true}/>
      <FighterName name={selectedFighter.name}/>
    </div> 
  );
}
 
export default LeftView;