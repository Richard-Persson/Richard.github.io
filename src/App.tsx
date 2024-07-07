import './App.css'

import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { Home }from './components/pages/home/home'
import { TicTacToe } from './components/pages/TicTacToe/TicTacToe'
import { Calculator } from './components/pages/Calculator/Calculator'
import {Conversion} from './components/pages/Conversion/conversion'



function App() {

  return (
    <>

    <Router basename="/">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TicTacToe' element={<TicTacToe/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/Conversion' element={<Conversion/>}/>
      </Routes>
    </Router>

    <Outlet/>
  </>

  
  )
}

export default App