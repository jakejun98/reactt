import logo from './logo.svg';
import React, { useState, useMemo } from 'react';


function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const numberChange = (e) => {
    setNumber(Number(e.target.value));
    
  };

  const buttonClick = () => {
    setCount(count + 1);
  };

  const squaredResult = useMemo(() => {
    alert('제곱 계산 수행!');     
    return number * number;
  }, [number]);



  return (
    <div className="App">
     <h1>제곱 계산기</h1>
      <div>
        <label>
          <input type="number" value={number} onChange={numberChange} />
        </label>
      </div>
      <div>
        <p>제곱결과 : {squaredResult}</p>
      </div>
      <div>
        <button onClick={buttonClick}>카운터 버튼</button>
        <p>카운터 클릭 횟수: {count}</p>
      </div>


    </div>
  );
}

export default App;
