import React from 'react'
import './gallery.css'
import maan2 from '../Images/maan2.jpeg';
import maan1 from '../Images/maan1.jpeg';

function Gallery() {
  return (
    <div className='gal'><h1>Gallery</h1>
    <br></br>
    <h1> 1st photo </h1><br></br>
        <img src={maan1} width="400px" height="600px" alt='maan1'></img>
        <h1>2nd photo of maan1<br /></h1>
        <img src={maan2} alt="Maan2"></img>
        <br></br><br></br>
    </div>
  )
}

export default Gallery