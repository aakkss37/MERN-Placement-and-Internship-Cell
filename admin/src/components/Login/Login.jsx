import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Button, Container,  TextField, Typography } from "@mui/material";
import './login.css'
import { API } from "../../services/api";
import DataProvider from "../../contextAPI/DataProvider";



const Login = ()=> {
	const context = useContext(DataProvider);
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [wrongUser, setWrongUser] = useState(false)
	const [wrongPassword, setWrongPassword] = useState(false)
	const navigate = useNavigate()

	const loginHandler = async()=>{
		try {
			const response = await API.login({username: username, password: password});
			console.log(response.data)
			if (response.data.authorized){
				context.setIsLogin(true)
				navigate("/home")
			} 
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<Container component="main" maxWidth="sm" className="login" style={{display: 'flex'}}>
			<div className='login_container'>
				<Typography component="h1" variant="h4" color="primary" style={{fontWeight: 600, color: "gray"}}>
					Admin Login
				</Typography>
				<Typography component="h1" variant="h5">
					Karpagam Academy of Higher Education Placement and Internship Cell
				</Typography>
				<form  >
					<TextField
						variant="outlined"
						margin="normal"
						error={wrongUser}
						required
						fullWidth
						id="username"
						label={wrongUser ? "Wrong Username" : "Username"}
						name="username"
						autoComplete="username"
						value={username}
						onChange={(event) => {setUsername(event.target.value); setWrongUser(false)}}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						error={wrongPassword}
						required
						fullWidth
						name="password"
						label={wrongUser ? "Wrong Password" : "Password"}
						type="password"
						id="password"
						value={password}
						onChange={(event) => {setPassword(event.target.value); setWrongPassword(false)}}
					/>
					
					<Button
						fullWidth
						variant="contained"
						color="primary"
						sx={{marginTop: '1rem'}}
						onClick={loginHandler}
					>
						Login
					</Button>
					
				</form>
			</div>
		</Container>
	);
}

export default Login