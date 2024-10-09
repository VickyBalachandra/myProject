import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='app'>
      <nav>
      <img src='imgs/em.png' className='logo'></img>
      
      <Link to="/home" className='link'>Home</Link>
      <Link to='/registration' className='link'>Registration</Link>
      <Link to="/employee" className='link'>Employee</Link>
      <Link to="/fly" className='link'>Book</Link>
      <Link to="/partner" className='link'>Sponsership</Link>

      
      </nav>

      <div className='outlet'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Body