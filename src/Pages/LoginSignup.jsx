import React from 'react'
import './CSS/loginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>Sign Up</h1>
        
        <field className='login-signup-field'>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Continue</button>
        </field>

        <p className='login-signup-login'>Already have an account? <a href="#">Login here</a></p>
      </div>      
    </div>
  )
}
