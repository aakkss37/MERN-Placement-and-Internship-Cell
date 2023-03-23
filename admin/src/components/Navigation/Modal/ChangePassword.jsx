import React, { useContext, useState } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { API } from '../../../services/api';
import { DataContext } from '../../../contextAPI/DataProvider';
import { useNavigate } from 'react-router-dom';



const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 20,
	borderRadius: '5px',
	p: 4,
};


const ChangePassword = (props) => {
	const [username, setUsername] = useState("")
	const [currentPassword, setCurrentPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [wrong, setWrong] = useState(false)
	const context = useContext(DataContext);
	const navigate = useNavigate()


	const changePasswortHandler = async () => {
		try {
			await API.changePassword({
				username: username,
				currentPassword: currentPassword,
				newPassword: newPassword,
			})
			context.setIsLogin(false)
			context.setOpenPasswordChangeSucessSnakebar(true)
			navigate('/')
		} catch (error) {
			setWrong(true)
			console.log(error.msg)			
		}
	}

	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography component="h5" variant="h5" color="primary" style={{ fontWeight: 600, color: "gray", textAlign: "center" }}>
						Change Password
					</Typography>
					{wrong ? <Typography style={{ textAlign: "start", color: "red" }} >Incorrect username or current password.</Typography> : <br />} 
					<form  >
						<TextField
							variant="outlined"
							type="text"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							value={username}
							onChange={(event) => {setUsername(event.target.value); setWrong(false)}}
							autoFocus
						/>
						<TextField
							variant="outlined"
							type="password"
							margin="normal"
							required
							fullWidth
							id="currentPassword"
							label="Current Password"
							name="currentPassword"
							autoComplete="currentPassword"
							value={currentPassword}
							onChange={(event) => {setCurrentPassword(event.target.value); setWrong(false)}}
						/>
						<TextField
							variant="outlined"
							type="password"
							margin="normal"
							required
							fullWidth
							name="newPassword"
							label="New Password"
							id="newPassword"
							value={newPassword}
							onChange={(event) => {setNewPassword(event.target.value); setWrong(false)}}
						/>

						<Button
							fullWidth
							variant="contained"
							color="primary"
							sx={{ marginTop: '1rem' }}
							onClick={changePasswortHandler}
						>
							Change Password
						</Button>

					</form>
				</Box>
			</Modal>
		</div>
	)
}

export default ChangePassword