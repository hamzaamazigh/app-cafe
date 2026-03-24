import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './component/NavBar'
import PopularMenu from './pages/PopularMenu'
import About from './component/About'
import Gallery from './component/Gallery'
import Location from './component/Location'

function App() {

  return (
    <>
      <Navbar />
      <div className="snap-y overflow-auto w-screen h-screen snap-mandatory" style={{scrollbarWidth:"none"}}>
        <div className="snap-center">
          <Home />
        </div>
        <div className="snap-center">
          <PopularMenu />
        </div>
        <div className="snap-center">
          <About />
        </div>
        <div className="snap-center">
          <Gallery />
        </div>
        <div className="snap-center">
          <Location />
        </div>
      </div>
    </>
  );
}

export default App
