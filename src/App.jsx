import React from 'react'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import Enquire from './Pages/Enquire/Enquire'
import NotFound from './Pages/NotFound/NotFound'
import Toffeer from './Pages/Project/Toffeer'
import Costa from './Pages/Project/Costa'
import Soon from './Pages/NotFound/Soon'
import Blooring from './Pages/Project/Blooring'
import Riseup from './Pages/Project/Riseup'
import Carisse from './Pages/Project/Carisse'
import Vitoria from './Pages/Project/Vitoria'

const App = () => {

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/enquire' element={<Enquire />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/soon' element={<Soon />} />

        <Route path='/toffeer' element={<Toffeer />} />
        <Route path='/vitoria' element={<Vitoria />} />
        <Route path='/blooring' element={<Blooring />} />
        <Route path='/costa' element={<Costa />} />
        <Route path='/riseup' element={<Riseup />} />
        <Route path='/carisse' element={<Carisse />} />
      </Routes>
    </>
  )
}

export default App