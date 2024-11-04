import React from 'react'
import Home from './home/Home'
import Courses from './/courses/Courses'
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/> }/>
      <Route path="/signup" element={<Signup/> }/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/contact" element={<Contact/> }/>
      
     </Routes>
    </div>
    </>
  )
}

export default App
