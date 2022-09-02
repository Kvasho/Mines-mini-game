import React from 'react';
import './styles.css';
import Board from '../components/Board';

function GameBoard(props) {
    
  return (
    <div className='gameboard'>
          <Board 
            restarted={props.restarted}
            lose={props.lose}
            handleCardClick = {props.handleCardClick}
            bomb = {props.bomb}
            clicked={props.clicked}
          />
    </div>
  )
}

export default GameBoard