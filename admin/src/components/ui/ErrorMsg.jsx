import React from 'react'
import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const ErrorMsg = (props) => {
	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={props.onClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);

	return (
		<Snackbar
			open={props.open}
			autoHideDuration={4000}
			onClose={props.onClose}
			message={props.message}
			action={action}
		/>
	)
}

export default ErrorMsg