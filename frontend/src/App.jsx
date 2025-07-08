import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Pastevent from './Components/PastEvents/Pastevent'
import Options from './Components/Options/Options'
import FooterPage from './Components/FooterPage/FooterPage'

function App() {

  return (
    <>
    <div className="components">
      <Home/>
      <Pastevent/>
      <Options />
      <FooterPage/>

    </div>
    </>
  )
}

export default App
