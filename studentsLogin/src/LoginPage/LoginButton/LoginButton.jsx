import React from 'react'
import GoogleLogo from './GoogleLogo'

const LoginButton = () => {
	return (
		<div>
			<button className='kahe_logon_button' >
				<GoogleLogo />
				<span>&nbsp; Login with Google</span>
			</button>
		</div>
	)
}

export default LoginButton