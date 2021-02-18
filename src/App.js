import React, {useState} from 'react';
import './App.css';

//REFERENCE MATERIAL https://www.youtube.com/watch?v=O6P86uwfdR0

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('YELLOW')
  const [time, setTime] = useState(12)
  const [place, setPlace] = useState('Brazil')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('RED')
    setTime(prevTime => prevTime -1)
    setPlace('Narnia')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('GREEN')
    setTime(prevTime => prevTime -1)
    setPlace('Howarts')
  }


  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <br></br>
      <span>{count}</span>
      <br></br>
      <span>{theme}</span>
      <br></br>
      <span>{time}</span>
      <br></br>
      <span>{place}</span>
      <br></br>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
