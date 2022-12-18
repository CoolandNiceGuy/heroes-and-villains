import styles from '../styles/Body.module.css'
import LeftView from './LeftView';
import FighterSelect from './FighterSelect';
import RightView from './RightView';
import { useState } from 'react';

const Body = () => {
  const [selectedFighter, setSelectedFighter] = useState();

  const handleSelect = (fighter) => {    
    //if a previous fighter has been selected
    if(selectedFighter?.name){
      //handle toggle
      if(selectedFighter.name === fighter.name){
        setSelectedFighter(undefined)
      }
      else {
        setSelectedFighter(fighter)
      }
    } else {
      setSelectedFighter(fighter)
    }
  }

  return (
    <div className={(selectedFighter)? styles.test:styles.body}>
      {
        selectedFighter &&
        <LeftView selectedFighter={selectedFighter}/>
      }
      <FighterSelect onClick={handleSelect} selectedFighter={selectedFighter}/>
      {
        selectedFighter &&
        <RightView selectedFighter={selectedFighter}/>
      }
    </div>
  );
}
 
export default Body;