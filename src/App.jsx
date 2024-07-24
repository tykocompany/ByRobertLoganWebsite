import React from 'react'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Agendar from './Pages/Agendar'
import Horarios from './Pages/Horarios'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Agendar/>}></Route>
    <Route path='/horario' element={<Horarios/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App