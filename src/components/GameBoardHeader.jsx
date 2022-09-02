// import React, { useEffect } from 'react'

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// function GameBoardHeader(props) {
//     const [mines, setMine] = React.useState(3);
//     const [randomNumbers, setRandomNumbers] = React.useState([]);
    
//     var arr = [];
//     while(arr.length < mines){
//         var randomNum = Math.floor(Math.random() * 25) + 1;
//         if(arr.indexOf(randomNum) === -1) arr.push(randomNum);
//         arr.sort((a,b) => {return a - b})
//     }
//     const handleChange = (event,arr) => {
//       setMine(event.target.value);
//   };
//     // setRandomNumbers([...arr]);
//     useEffect(() => console.log(randomNumbers));
//   return (
//     <>
//     <section className='gameboard-header'>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={mines}
//           onChange={handleChange}
//           inputProps={{ 'aria-label': 'Mines' }}
//         >
//           <MenuItem value={1}>1</MenuItem>
//           <MenuItem value={2}>2</MenuItem>
//           <MenuItem value={3}>3</MenuItem>
//           <MenuItem value={4}>4</MenuItem>
//           <MenuItem value={5}>5</MenuItem>
//           <MenuItem value={6}>6</MenuItem>
//           <MenuItem value={7}>7</MenuItem>
//           <MenuItem value={8}>8</MenuItem>
//           <MenuItem value={9}>9</MenuItem>
//           <MenuItem value={10}>10</MenuItem>
//           <MenuItem value={11}>11</MenuItem>
//           <MenuItem value={12}>12</MenuItem>
//           <MenuItem value={13}>13</MenuItem>
//           <MenuItem value={14}>14</MenuItem>
//           <MenuItem value={15}>15</MenuItem>
//           <MenuItem value={16}>16</MenuItem>
//           <MenuItem value={17}>17</MenuItem>
//           <MenuItem value={18}>18</MenuItem>
//           <MenuItem value={19}>19</MenuItem>
//           <MenuItem value={20}>20</MenuItem>
//         </Select>
//       </FormControl>
//       <div className='next-win'>Next:   {props.possibleWin} USD</div>
//     </section>
//     <div className='divider'></div>
//     </>
//   )
// }

// export default GameBoardHeader