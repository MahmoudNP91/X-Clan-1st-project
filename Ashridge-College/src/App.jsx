import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import PreCourse from './pages/preCourse'
import Quiz from './pages/quiz'

function App() {

  return (
    <>
      {/* <NavBar/>
      <PreCourse/>
      <Footer/> */}
      <Quiz/>
    </>
  )
}

export default App
