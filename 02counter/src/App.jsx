/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter,SetCounter] = useState(15)
  // let Counter=5
  const addValue = ()=>{
    if (Counter>=20) {
      return 0
    } else {Counter = Counter+1
      SetCounter(Counter)
      
    }
    
  }

  const removeValue = ()=>{
    if (Counter<=0) {
      return 0
    }
    else
    Counter = Counter-1
    SetCounter(Counter)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter : {Counter}</h2>
    <button
    onClick={addValue}>Add Value</button>
    <br/>
    <button
    onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
