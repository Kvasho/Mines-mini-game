import React from 'react';

import CardFlip from '../components/card-flip';
import '../App.css';

const ragaca = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false
}

function Board(props) {
  return (
    <div className='board'>
        <div className={props.clicked ? 'parent' : 'parent disabled'}>
            {Object.keys(ragaca).map((item) => <CardFlip restarted={props.restarted} lose={props.lose} handleCardClick = {props.handleCardClick} id={item} key={item} />)}
          </div>
    </div>
  )
}

export default Board