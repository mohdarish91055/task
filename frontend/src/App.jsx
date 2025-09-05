import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Projects from './components/Project'

function App() {
  

  return (
    <>
   
     <Router>
  
      <div >
        <Header  />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Footer />
      </div>
    
    </Router>
   
      
    </>
  )
}

export default App
