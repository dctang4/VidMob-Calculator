import './App.scss';
import React, {useState} from "react";
import Calculator from './functions/calculator';

function App() {

  const [equation, setEquation] = useState('')
  const [result, setResult] = useState(null)

  const handleChange = (event) => {
    setEquation(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(Calculator(equation))
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label className="equation" >Equation: </label>
        <input 
          type='text'
          className="equation"
          name='equation'
          placeholder='Enter an Equation'
          value={equation}
          onChange={handleChange}
          alt="Result"
        />
        <label className='result'>Result: </label>
        <input 
          type='text'
          className="result"
          name='result'
          placeholder='Result Output'
          value={result}
          alt="Result"
        />
        <input 
          type='submit'
          className='submit-btn'
          alt='submit'
        />
      </form>
    </div>
  );
}

export default App;
