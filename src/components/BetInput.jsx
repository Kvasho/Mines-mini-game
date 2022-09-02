import React from 'react';

function BetInput(props) {
  const [bet,setBet] = React.useState(1);
  return (
    <div className='bet-input'>
        <div className='left'>
            <h5>bet, USD</h5>
            <input type="number" placeholder={bet}/>
        </div>
        <div className='right'>
            <button className='decrement' onClick={props.onSubmit(bet)}>-</button>
            <button className='increment' onClick={() => setBet(bet + 1)}>+</button>
        </div>
    </div>
  )
 
}



export default BetInput