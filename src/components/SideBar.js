import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  //guard class
  if (!isMenuOpen) return;

  return (
    // {backgroundColor:'#333', color:"white", padding: '5px', borderRadius: '5px', fontWeight:'900'}
    <div className=' p-5 shadow-lg w-48 flex flex-col gap-2 '>
      <ul className='flex flex-col gap-2'>
        <li><NavLink to="/" className={({ isActive }) =>
          isActive ? 'font-bold border-b-4 border-solid border-red-500' : undefined
        }>Home</NavLink> </li>
        <li><NavLink to="/videos" className={({ isActive }) =>
          isActive ? 'font-bold border-b-4 border-solid border-red-500' : undefined
        }>Videos</NavLink> </li>
        <li><NavLink to="/shorts" className={({ isActive }) =>
          isActive ? 'font-bold border-b-4 border-solid border-red-500' : undefined
        }>Shorts</NavLink> </li>
        <li><NavLink to="/live" className={({ isActive }) =>
          isActive ? 'font-bold border-b-4 border-solid border-red-500' : undefined
        }>Live</NavLink> </li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
