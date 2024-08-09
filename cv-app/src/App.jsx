import { useState } from 'react'
import './App.css'
import { General } from './General'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <General />
      <General ></General>
    </>


  )
}

export default App
