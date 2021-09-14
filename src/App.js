import './App.css';
import React, {useState} from "react"

function App() {
  return (
    <div className="App">
      <form>
        <label>Equation</label>
        <input 
          type='text'
          className="equation"
          name='equation'
          placeholder='Enter an Equation'
          // value={equation}
          // onChange={handleChange}
          alt="Result"
        />
        <label>Result</label>
        <input 
          type='text'
          className="result"
          name='result'
          placeholder='Result Output'
          // value={result}
          // onChange={handleChange}
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
