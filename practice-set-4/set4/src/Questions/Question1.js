import React from 'react'
import '../Styles/Question1.css'

export const Question1 = () => {
  return (
    <form action="" className='form-container'>
      <div className='container'>
        <label htmlFor="name" className='labelq1'>
          <p>Name:</p>
          <input type="text" name="name" id="name" autoComplete='off' required className='inputq1' />
        </label>
        <label htmlFor="email" className='labelq1'>
          <p>Email:</p>
          <input type="email" name="email" id="email" autoComplete='off' required className='inputq1' />
        </label>
        <label htmlFor="message" className='labelq1'>
          <p>Message:</p>
          <textarea name="message" id="message" cols="30" rows="6" required />
        </label>
        <input type="submit" value="Submit" className='submit-btn inputq1' />
      </div>
    </form>
  )
}
