import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={reactLogo} className='logo react'/>
    </>
  )
}

export default App
