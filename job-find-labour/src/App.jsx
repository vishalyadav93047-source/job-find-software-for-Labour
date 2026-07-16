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
import Jobs from './Pages/Jobs/Jobs'
import JobFinder from './Components/Jobfinder/JobFinder'
import Alljobs from './Components/Alljobs/Alljobs'
import Working from './Components/Workingpage/Working'
import AlljobsDetails from './Components/AlljobsDetails/AlljobsDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Jobs' element={<Jobs/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/LogIn' element={<Login/>}/>
          <Route path='/JobFinder' element={<JobFinder/>}/>
          <Route path='/Alljobs' element={<Alljobs/>}/>
          <Route path='/Working' element={<Working/>}/>
          <Route path='/jobs/:id' element={<AlljobsDetails/>}/>

  

          
        </Routes>

        
    </>
  )
}

export default App
