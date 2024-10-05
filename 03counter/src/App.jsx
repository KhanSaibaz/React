import { useState } from 'react'
import './App.css'

function App() {
  // useState is a Hook that allows you to add React state to function components.
  // It returns an array with two elements: the current state value and a function to update that state.
  const [counter, setCounter] = useState(0)  // Initialize counter state with 0
  
  // Function to increase the counter by 1, up to a maximum of 20
  const addValue = () => {
    // setCounter updates the state, React will re-render the component whenever the state changes
    // setCounter(counter < 20 ? counter + 1 : counter); // Increment counter if it's less than 20
    setCounter( counter + 1); // Increment counter if it's less than 20
    setCounter( counter - 1); // Increment counter if it's less than 20
    setCounter( counter + 1); // Increment counter if it's less than 20
  }

  // Function to decrease the counter by 1, down to a minimum of 0
  const subValue = () => {
    // Conditional check to ensure the counter doesn't go below 0
    setCounter(counter > 0 ? counter - 1 : counter);
  }

  return (
    <>
      <h2>Hello game</h2>
      
      {/* Display the current counter value */}
      <h3>Counter : {counter}</h3>
      
      {/* Button to increment the counter */}
      <button className="btn" onClick={addValue}>Add value {counter}</button>
      <br />
      
      {/* Button to decrement the counter */}
      <button className="btn" onClick={subValue}>Remove value {counter}</button>
    </>
  )
}

export default App
  