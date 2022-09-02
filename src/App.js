import React  from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MainHeader from './components/MainHeader';
import GameBoard from './container/GameBoard';

import './App.css'; 
import '../src/components/component-styles.css';
import '../src/container/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bank:        3000,
      mines:       3,
      possibleWin: 1,
      clicked:     false,
      bet:         1,
      randomNum:   [],
      lose:        false,
      turn:        1,
      randomBet:   0
    }
  }

  handleCardClick = (num,cardFlip) => {
    const randomNumber = this.state.randomNum.includes(num);
    if(randomNumber){
      this.setState({
        lose: false
      })
    }
    const loseOrNot = this.state.randomNum.includes(parseInt(num));
    if(loseOrNot){
      this.setState({
        lose: true,
        possibleWin: 1,
        clicked: false
      })
    } else {
      this.setState({
        turn: this.state.turn + 1,
        possibleWin: this.state.possibleWin + this.state.turn
      })
    }
  }

  decrement = () => {
    this.setState({
      bet: Math.max(1, this.state.bet - 1),
      possibleWin: Math.max(1,this.state.bet - 0.5)
    })
  }

  increment = () => {
    this.setState({
      bet: Math.min(this.state.bank, this.state.bet + 1),
      possibleWin: this.state.mines*this.state.bet
    })
  }

  
  refreshPage = () => {
    window.location.reload(false);
  }

  betHandleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      bank: this.state.bank - this.state.bet
    })
    this.numberOfMines();
  }
  
  cashoutHandleClick = () => {
    this.setState ({
      clicked: false,
      bank: this.state.bank + this.state.possibleWin,
      possibleWin : 1,
      restarted: true,
      randomNum:   []
    })
  }

  handleChange = (event) => {
    this.setState({
      mines: event.target.value,
      possibleWin: event.target.value / 2 - 0.5
    });
  };

  numberOfMines = () => {
    var arr = [];
    while(arr.length < this.state.mines){
        var randomNum = Math.floor(Math.random() * 25) + 1;
        if(arr.indexOf(randomNum) === -1) arr.push(randomNum);
        arr.sort((a,b) => {return a - b})
    }
    this.setState({
      randomNum: arr
    })  
  }  

  randomHandler = () => {
    var randomBet = Math.floor(Math.random() * 25) + 1;
    this.setState({
      randomBet: randomBet
    })
  }

  render() {
    return (
      <div className='App'>
        <main className='container'>          
          <MainHeader  bank={this.state.bank}/>
            <div className='divider'></div>
             <div>
              <section className='gameboard-header'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={this.state.mines}
                    onChange={this.handleChange}
                    inputProps={{ 'aria-label': 'Mines' }}
                  >
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </FormControl>
                <div className='next-win'>
                    <h3>Next:{this.state.possibleWin} USD</h3>
              </div>
            </section>
              <GameBoard
                  restarted={this.state.clicked}
                  lose={this.state.lose}
                  handleCardClick = {this.handleCardClick}
                  clicked={this.state.clicked} 
                  possibleWin = {this.state.possibleWin}
                  bomb = {this.state.bomb}
                />
            </div>                    
        <div className='middle'>
            <button className='restart-btn' onClick={this.refreshPage}>Restart</button>
            {/* <button className='restart-btn' onClick={this.randomHandler}>Random</button> */}
        </div>
          <footer className='footer'>
          <div className={this.state.clicked ? 'bet-input disabled' : 'bet-input'}>
        <div className='left'>
            <h5>bet, USD</h5>
            <input type="number" placeholder={this.state.bet}/>
        </div>
        
        <div className='right'>
            <button className='decrement' onClick={this.decrement}>-</button>
            <button className='increment' onClick={this.increment}>+</button>
        </div>
    </div>
    <div className='bet'>
      {
        this.state.clicked  ? <button onClick={this.cashoutHandleClick} className='bet-btn-danger'>cashout</button> 
        :  <button onClick={this.betHandleClick} className='bet-btn'>bet</button> 
      }
    </div>
    </footer>
        </main>
      </div>
    )
  }
}

export default App;