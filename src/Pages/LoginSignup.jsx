import React from 'react'
import './CSS/loginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <h1 className='sign-in-text'>Sign in to your account</h1>
      <p className='sign-in-p'>or sign up for a <a href="#">new account</a></p>
      <div className='login-signup-container'>        
        <field className='login-signup-field'>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Continue</button>
        </field>

        <div className='ls-container-2'>
          <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
          </div>

          <a href="#">Forgot your password?</a>
        </div>
      </div>      
    </div>
  )
}
