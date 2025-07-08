import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Pastevent from './Components/PastEvents/Pastevent'
import Options from './Components/Options/Options'

function App() {

  return (
    <>
      <Home/>
      <Pastevent/>
      <Options />
    </>
  )
}

export default App
