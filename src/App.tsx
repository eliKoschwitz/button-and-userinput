import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState<number>(0);

    const clickHandlerForAdd = () => {return setCount(count+1)};
    const clickHandlerForMinus = () => {return setCount(count-1)};

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={clickHandlerForAdd} >Drück mich dann wirds mehr!</button>
        <button onClick={clickHandlerForMinus} >Drück mich dann wirds weniger!</button>

      </header>
    </div>
  );
}

export default App;
