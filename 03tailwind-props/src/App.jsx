import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './assets/components/card'
import './App.css'

function App() {

//let objecte ={
 // username: "ahmad",
 // age: 21
 //}

  return (
    <>
    <div>
      <h1 className ="bg-green-400  p-4 rounded-xl mb-5" >tailwind test</h1> 

      <Card/>
      <Card username="ahmad" btnText="click me"/>
      <Card username="raza" btnText="visite me"/>
      </div>
    </>
  )
};

export default App;
