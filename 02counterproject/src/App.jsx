import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let counter = 15 
const addValue = ()=> {
  console.log("clicked", Math.random() );
 
 counter = counter + 1
  
}
  return (
    <>
     <h1> ahmad with react boss</h1>
     <h3> counter value: {counter}  </h3>

     <button onClick={addValue} > add value </button> <br />
     <button> remove value </button> 
    </>
  )
}

export default App
