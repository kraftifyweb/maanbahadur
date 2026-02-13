import React from 'react'
import './head.css'
import Marquee from "react-fast-marquee";

function Head() {
  return (
    <div className='p'>
        <Marquee>
            <h1>Welcome to My Blog</h1>
        </Marquee>
    </div>
  )
}

export default Head