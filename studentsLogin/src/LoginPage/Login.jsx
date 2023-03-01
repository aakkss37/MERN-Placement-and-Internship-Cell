import React, { useEffect } from 'react'
import './login.css';
import logo from '../asset/KAHE_LOGO.png'
import { LoginSocialGoogle } from 'reactjs-social-login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton/LoginButton';

const PORT = process.env.REACT_APP_SERVER_PORT;
// const validateAccessTokan = async (aaccessToken) => {
// 	try {
// 		const responce = await axios.post("http://localhost:8000/validate-access-tokan", {
// 			aaccessToken: aaccessToken
// 		});

// 		// console.log(responce.data);
// 		return responce.data
// 	} catch (error) {
// 		console.log(error);
// 	}
// }


const Login = (props) => {
	// const navigate = useNavigate();



	// useEffect(() => {
	// 	const aaccessToken = localStorage.getItem("accessToken");
	// 	console.log("aaccessToken from localStorage ==>>>>>>>>", aaccessToken)
	// 	const validateToken = async () => {
	// 		if (aaccessToken) {
	// 			const userData = await validateAccessTokan(aaccessToken)
	// 			// console.log(userData)
	// 			props.setUser(userData);
	// 			// navigate('/home')
	// 		}
	// 	}
	// 	validateToken();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);


	const handleLoginResponce = async (data) => {
		// console.log("tokenID==>>>>",data.access_token)

		try {
			const responce = await axios.post(`http://localhost:${PORT}/login`, {
				access_token: data.access_token,
			})
			// console.log(resp.data)
			localStorage.setItem('accessToken', `Bearer ${responce.data.jwtAccessToken}`) //SESSION STORAGE
			localStorage.setItem('refreshToken', `Bearer ${responce.data.jwtRefreshToken}`)
			props.setUser({
				name: responce.data.name,
				email: responce.data.email,
				img: responce.data.picture
			})

			// navigate('/home')
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<div className='kahe_login'>
			<div className='kahe_login_container'>
				<div className='kahe_logo'>
					<img src={logo} alt='logo' />
				</div>

				<div className='kahe_login_text'>
					<h3>Karpagan Academy of Higher Education</h3>
					<p>Placement and Internship Cell</p>
				</div>

				<LoginSocialGoogle
					client_id={process.env.REACT_APP_CLIENT_ID}
					scope="openid profile email"
					discoveryDocs="claims_supported"
					access_type="offline"
					onResolve={({ provider, data }) => {
						handleLoginResponce(data)
						console.log(data)
					}}
					onReject={err => {
						console.log(err);
					}}
					hosted_domain="kahedu.edu.in"
					fetch_basic_profile={true}
				>
					<LoginButton/>
				</LoginSocialGoogle>
			</div>
		</div>
	)
}

export default Login