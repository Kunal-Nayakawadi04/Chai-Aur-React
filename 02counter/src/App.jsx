import { useState } from 'react'
import './App.css'

function App() {
  
    const [counter , setCounter] = useState(15);
    const [message , setMessage] = useState('');

    const  Increment = () =>{
      setCounter(counter + 1);
      setMessage('')
    }

    const  Decrement = () =>{
      if(counter === 0){
        setMessage("Sorry, cannot go below 0")
      }else{
        setCounter(counter - 1)
        setMessage('');
      }
      
    }

  return (
    <>
     <h1>CHAI AUR REACT</h1>
     <h2>Counter Value : {counter}</h2> 
     {message && <p style={{ color: 'red' }}>{message}</p>}

     <button
      onClick={Increment}
     >Increment</button>
     <br></br>
     <br></br>
     <button
      onClick={Decrement}
     >Decrement</button>

  
    </>
  )
}

export default App
