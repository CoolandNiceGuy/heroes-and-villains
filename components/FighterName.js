import styles from '../styles/FighterName.module.css'
const FighterName = (props) => {
  const {name} = props
  return ( 
    <div className={styles.fighterName}>
      {name}
    </div>
   );
}
 
export default FighterName;