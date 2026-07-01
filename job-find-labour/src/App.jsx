import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Job from './Components/Jobs/job'
import Contact from './Pages/Contact/Contact'
import Mainnav from './Components/Mainnav/Mainnav'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Jobs' element={<Job/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>

        
    </>
  )
}

export default App
