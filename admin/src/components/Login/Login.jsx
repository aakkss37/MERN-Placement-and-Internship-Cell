import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Button, Container,  TextField, Typography } from "@mui/material";
import './login.css'
import { API } from "../../services/api";
import { DataContext } from "../../contextAPI/DataProvider";


const Login = ()=> {
	const context = useContext(DataContext);
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [wrong, setWrong] = useState(false)
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
			setWrong(true)
			console.log(error)
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
				{wrong ? <Typography style={{textAlign: "start", color: "red"}} >Incorrect username or password.</Typography> : <br/>} 
				<form  >
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label={"Username"}
						name="username"
						autoComplete="username"
						value={username}
						onChange={(event) => {setUsername(event.target.value); setWrong(false)}}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label={"Password"}
						type="password"
						id="password"
						value={password}
						onChange={(event) => {setPassword(event.target.value); setWrong(false)}}
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