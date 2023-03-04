import React from 'react';
import './login.css'
import logo from '../../assets/KAHE_LOGO.png';

const Login = () => {
	return (
		<div className='login'>
			<div className='login_container'>
				<div className='login_college_logo'>
					<img src={logo} alt="img" />
				</div>
				<div className='kahe_login_text'>
					<h3>Karpagan Academy of Higher Education</h3>
					<p>Placement and Internship Cell</p>
				</div>
				<div className='login_form_container'>
					<input type="text" placeholder='Username'/>
					<input type="password" placeholder='Password'/>
					<button>Login</button>
				</div>
			</div>
		</div>
	)
}

export default Login