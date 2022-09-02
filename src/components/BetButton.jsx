import React from 'react';

function BetButton() {
  const [clicked, setClicked] = React.useState(false);
  const [cashout, setCashout] = React.useState(false);
  return (
    <div className='bet'>
      {
        clicked ? <button onClick={() => setClicked(!clicked)} className='bet-btn-danger'>cashout</button> 
        : <button onClick={() => setClicked(!clicked)} className='bet-btn'>bet</button> 
      }
      
    </div>
  )
}

export default BetButton