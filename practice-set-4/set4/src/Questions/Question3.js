import React from 'react'
import '../Styles/Question3.css'
import animal from '../Images/animal.jpg'
import birds from '../Images/birds.jpg'
import nature from '../Images/nature.jpg'

export const Question3 = () => {
  return (
    <div className='mainq3'>
      <h1 className='headingq3'>Photo Gallery</h1>
      <Navbar />
      <div className='photo-container'>
        <img src={animal} alt="Img" className='q3Images' />
        <img src={birds} alt="Img" className='q3Images' />
        <img src={nature} alt="Img" className='q3Images' />
      </div>
    </div>
  )
}


const Navbar = () => {
  return (
    <nav className='navq3'>
      <li className='all-btn  q3Li'>All</li>
      <li className='q3Li'>Nature</li>
      <li className='q3Li'>Birds</li>
      <li className='q3Li'>Animals</li>
    </nav>
  )
}