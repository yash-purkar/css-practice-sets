import React from 'react'
import '../Styles/Question2.css'

export const Question2 = () => {
  return (
    <div className='main'>
      <div className='inner-containerq2'>
        <h2>Login</h2>
        <form action="" className='form-container2'>
          <label htmlFor="email" className='labelq2'>
            <strong>Email:</strong>
            <input type="email" name="email" id="email" className='inputq2' autoComplete='off' />
          </label>
          <label htmlFor="password" className='labelq2'>
            <strong>Password:</strong>
            <input type="password" name="password" id="password" className='inputq2' autoComplete='off' />
          </label>
          <input type="submit" value="Login" className='login-btn' />
          <p className='forgot-pass'>Forgot Password?</p>
        </form>
      </div>
    </div>
  )
}