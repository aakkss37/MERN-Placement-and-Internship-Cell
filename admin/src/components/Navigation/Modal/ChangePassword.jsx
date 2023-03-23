import React from 'react'
import { Box, Modal, Typography } from '@mui/material';



const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 20,
	p: 4,
};


const ChangePassword = (props) => {
  return (
	  <div>
		  <Modal
			  open={props.open}
			  onClose={props.onClose}
			  aria-labelledby="modal-modal-title"
			  aria-describedby="modal-modal-description"
		  >
			  <Box sx={style}>
				  <Typography id="modal-modal-title" variant="h6" component="h2">
					  Text in a modal
				  </Typography>
				  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
					  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				  </Typography>
			  </Box>
		  </Modal>
	  </div>
  )
}

export default ChangePassword