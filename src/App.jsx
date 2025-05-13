import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import MyWork from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
