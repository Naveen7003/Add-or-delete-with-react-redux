import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul className='flex justify-center gap-6 pt-8 text-2xl font-semibold'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
        </li>
        <li>
        <Link to="/show">Show</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Nav