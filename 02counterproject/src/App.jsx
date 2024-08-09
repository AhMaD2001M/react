
// bable help us to get this information.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  
// let counter = 15 
const addValue = ()=> {
  console.log("clicked", counter);
 
 counter = counter + 1
  setCounter(counter);
}
  return (
    <>
     <h1> ahmad with react boss</h1>
     <h3> counter value: {counter}  </h3>

     <button onClick={addValue} > add value {counter} </button> <br />
     <button> remove value {counter} </button> 
     <p>{counter}</p>
    </>
  )
}

export default App
