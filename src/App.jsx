import { NavBar } from './components/NavBar/NavBar';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NavBar     />
      <img src={reactLogo} className='logo react'/>
    </>
  )
}

export default App
