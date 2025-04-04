import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-end gap-5 items-center bg-gray-200 p-4 shadow-md' >
      <NavLink
        to='/'
        className='text-xl font-bold text-gray-800 hover:text-gray-600'
      >
        Home
      </NavLink>
      
      <NavLink
        to='/pastes'
        className='text-xl font-bold text-gray-800 hover:text-gray-600'
      >
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar