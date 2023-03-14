import React from "react";
import { useNavigate } from "react-router-dom";
import {  Button, Container,  TextField, Typography } from "@mui/material";
import './login.css'



const Login = ()=> {
	const navigate = useNavigate()
	const loginHandler = ()=>{
		navigate('/home')
	}

	return (
		<Container component="main" maxWidth="sm" className="login">
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
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					
					<Button
						type="submit"
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