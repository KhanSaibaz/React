import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

/*
  useCallback:
  - `useCallback` is a React hook that returns a memoized version of a function.
  - It prevents the re-creation of the function unless one of its dependencies changes.
  - This is useful for performance optimization, especially when passing functions as props to child components.
  
  useEffect:
  - `useEffect` is a React hook that runs side-effects after the component renders.
  - It runs the provided function (effect) after the DOM has been updated and can re-run when dependencies change.
  - This hook is often used for things like data fetching, subscriptions, or updating the DOM based on state/props.
*/

function App() {
  // State variables
  const [length, setLength] = useState(8)  // Password length
  const [NumbersAllowed, setNumber] = useState(false)  // Whether to allow numbers in the password
  const [charAllowed, setChar] = useState(false)  // Whether to allow special characters in the password
  const [password, setPassword] = useState("")  // Generated password


  const passref=useRef(null)

  // useCallback memoizes the password generator function to avoid unnecessary re-creations
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    // If numbers are allowed, add them to the character set
    if (NumbersAllowed) str += '0123456789'
    
    // If special characters are allowed, add them to the character set
    if (charAllowed) str += '@#$%^&*()-={}[]'

    // Generate password by picking random characters from the string
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    // Set the generated password in the state
    setPassword(pass)

  }, [length, NumbersAllowed, charAllowed, setPassword])  // Dependencies: only recreate when these values change


  const copyPassword=useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,10)

    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect runs the password generator every time length, NumbersAllowed, or charAllowed changes
  useEffect(() => {
    passwordGenerator()  // Call the memoized password generator function
  }, [length, NumbersAllowed, charAllowed])  // Dependencies: trigger effect when these values change

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
      <h1 className="text-white text-center my-3">Passwords</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}  // Show generated password
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly  // Make the input field read-only
          ref={passref} 
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
            min={6}
            max={100}
            value={length}  // Bind length to the range slider
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}  // Update length on slider change
          />
          <label htmlFor=""> Length :{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={NumbersAllowed}  // Check/uncheck the NumbersAllowed option
            id='numberinput'
            onChange={() => {
              setNumber((prev) => !prev)  // Toggle NumbersAllowed state
            }}
          />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charAllowed}  // Check/uncheck the charAllowed option
            id='Charinput'
            onChange={() => {
              setChar((prev) => !prev)  // Toggle charAllowed state
            }}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
