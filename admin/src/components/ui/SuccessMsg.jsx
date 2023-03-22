import React, { forwardRef } from 'react'
import { Snackbar, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert (props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SuccessMsg = (props) => {
	
	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar open={props.open} autoHideDuration={4000} onClose={props.onClose} >
				<Alert onClose={props.onClose} severity="success" sx={{ width: '100%' }}>
					{props.message}
				</Alert>
			</Snackbar>
		</Stack>
	)
}

export default SuccessMsg