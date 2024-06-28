import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [Number, setNumber] = useState([]);



  const createNumber = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(createNumber());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className="App">
      <h1>로또번호 자동 생성기</h1>
     <div>{Number.join(', ')}</div>
    </div>
  );
}

export default App;
