import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    // font-extrabold text-4xl
    <div className='grid grid-flow-col '>
      <SideBar></SideBar>
      <Outlet />
    </div>
  )
}

export default Body
