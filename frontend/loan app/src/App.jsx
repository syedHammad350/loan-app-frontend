import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Outlet, Route, Routes } from 'react-router-dom'
import  Service  from './pages/Service'
import  About  from './pages/About'
import { Contactus } from './pages/Contactus'
import  Home  from './pages/Home'
import { Applyforloan } from './pages/Applyforloan'
import Sidebar from './Component/Sidebar'
import Footer from './Component/Footer'
import { Publicroutes } from './Routes/Publicroutes'
import { Authroutes } from './Routes/Authroutes'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
  

<>
<Routes>
  
  <Route element={<Publicroutes/>}  >
    
    <Route path='/'element={<><Home/></>}/>
    <Route path='/contactus'element={<><Contactus/></>}/>
    <Route path='/about'element={<><About/></>}/>
    <Route path='/service'element={<><Service/></>}/>
     <Route path='/loanform'element={<><Applyforloan/></>}/>

  </Route>
  <Route element={<Authroutes/>}>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/login'element={<Login/>}/>
  </Route>
</Routes>
<ToastContainer
 position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"
/>
</>
    





  )
}

export default App
