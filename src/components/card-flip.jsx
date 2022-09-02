import React, {useEffect}  from 'react';
import ReactCardFlip from 'react-card-flip';
import '../../src/App.css'


function CardFlip(props) {
  const [cardFlip, setFlip] = React.useState(false);
  useEffect(() => console.log(cardFlip,"CARD FLIPPP",props.restarted,"PROPS RESTARTED"));
  return (
    <ReactCardFlip className='flip-card-main'  isFlipped={cardFlip} flipDirection="vertical" >
      <button id={props.id} className='cell' onClick={(e) => {
        setFlip(true);        
        props.handleCardClick(parseInt(e.target.id))
      }}>
      </button>
      <div id={props.id} className={props.lose ? 'cell-back loose-card' : 'cell-back'} ></div>
    </ReactCardFlip>
  )
}

export default CardFlip;