import React from 'react'
import GoogleLogo from './GoogleLogo'

const LoginButton = () => {
  return (
	  <button className='kahe_logon_button' >
		<GoogleLogo/> 
		<span>Login</span>
	</button>
  )
}

export default LoginButton