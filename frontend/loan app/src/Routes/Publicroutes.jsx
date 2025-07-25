import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

export const Publicroutes = () => {
  
  const isauth=!!localStorage.getItem('token')
  // console.log(isauth)
  return isauth ?  <> <Navbar/> <Outlet/><Footer/></>:<Navigate to={'/login'}/>
}

