import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConformationDialog = (props) => {
	
	

	return (
		<div>
			<Dialog
				open={props.openConformation}
				onClose={props.onClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{`Are You Sure You Want to update ${props.companyName} Details?`}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You can not undo the changes. In order to make change after you conform this update, you can do this in detail section of company details. This change will not affect the applicants list. 
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.onClose}>Close</Button>
					<Button onClick={props.onContinue} autoFocus>
						Continue
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ConformationDialog