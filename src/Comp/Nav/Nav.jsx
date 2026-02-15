import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

function Nav() {
  return (
    <div className='nav'>
        <ol>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact Me</Link></li>
        </ol>
    </div>
  )
}

export default Nav