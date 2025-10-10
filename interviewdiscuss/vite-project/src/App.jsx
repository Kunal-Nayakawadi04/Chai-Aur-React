import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  //const [multipiedValue, setMultipiedValue] = useState(1)

  let multipiedValue = value * 5

  const multiplybyfive = () => {
    //setMultipiedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main Value: {value} </h1>
      <button onClick={multiplybyfive}>Multiply by 5</button>
      <h1>Multiplied Value: {multipiedValue}</h1>
    </>
  )
}

export default App
