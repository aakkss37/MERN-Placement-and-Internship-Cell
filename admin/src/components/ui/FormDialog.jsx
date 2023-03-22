import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { formatDate } from '../../utils/commonUtil';

export default function FormDialog (props) {
	const [userInput, setUserInput] = useState("");
	const [isInputCorrect, setIsInputCorrest] = useState(false)

	useEffect(() => {
		setIsInputCorrest(userInput === props.companyID)
	}, [props.companyID, userInput]);

	return (
		<div>
			<Dialog 
				open={props.openFormDialog} 
				onClose={props.onClose}
				sx={{ width: '50%', marginLeft: "25%" }}
			>
				<DialogTitle sx={{fontWeight: 600, fontSize: '1.3rem', color: 'red'}}>Delete Permanently!</DialogTitle>
				<DialogContent>
					<DialogContentText>
						This action can will lead to permanent loss of <b>{props.companyName} - {formatDate(props.date)}</b> 
						Drive including applicants detail, test result and all other important data related to this 
						document. To comform this action please Type the Company ID: <b>{props.companyID}</b>.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						label="Company ID"
						type="text"
						value={userInput}
						onChange={(event) => setUserInput(event.target.value)}
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.onClose} variant="outlined" color="success">Cancel</Button>
					{
						isInputCorrect 
						?
							<Button variant="contained" onClick={props.onContinue} color="error">Delete</Button>
						:
						<Button  variant="contained" disabled>Delete</Button>
					}
				</DialogActions>
			</Dialog>
		</div>
	);
}