import React, { useState } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material';



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
	const [currentPassword, setCurrentPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")

	const changePasswortHandler = () => { }
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
					<form  >
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
							onChange={(event)=> setCurrentPassword(event.target.value)}
							autoFocus
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
							onChange={(event) => setNewPassword(event.target.value)}
						/>

						<Button
							type="submit"
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