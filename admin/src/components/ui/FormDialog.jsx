import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { formatDate } from '../../utils/commonUtil';

export default function FormDialog (props) {

	return (
		<div>
			<Dialog 
				open={props.openFormDialog} 
				onClose={props.handleClose}
				sx={{ width: '50%', marginLeft: "25%" }}
			>
				<DialogTitle>Delete Permanently!</DialogTitle>
				<DialogContent>
					<DialogContentText>
						This action can will lead to permanent loss of {props.companyName} - {formatDate(props.date)} 
						Drive including applicants detail, test result and all other important data related to this 
						document. To comform this action please Type the Company ID: <b>{props.companyID}</b>.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleClose}>Cancel</Button>
					<Button onClick={props.handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}