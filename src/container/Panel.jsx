import React from 'react';
import './styles.css';
import BetInput from '../components/BetInput';
import BetButton from '../components/BetButton';

function Panel({ parentCallback, props }) {
  return (
    <footer className='footer'>
        <BetInput 
         onSubmit = {getData}
        />
        <BetButton />
    </footer>
  )
}

export default Panel;