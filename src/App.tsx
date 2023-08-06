import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {LandingSection} from './components/sections/LandingSection/LandingSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header  />
      <LandingSection />
      <img src={reactLogo} className='logo react'/>
    </>
  )
}

export default App
