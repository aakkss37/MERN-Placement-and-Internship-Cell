import bcrypt from 'bcrypt';
import Admin from '../../model/adminSchema.js';


export const createAdmin = async (request, responce) => {
	console.log("create admin: ---> ", request.body)
	try {
		const encryptedPassword = await bcrypt.hash(request.body.password, 10); // --> bcrypt(password, salt_value)
		const adminCredentials = {
			username: request.body.username,
			password: encryptedPassword
		}
		console.log("serverGenerated: ---> ", adminCredentials);
		const admin = await Admin.create(adminCredentials);
		await admin.save();
		return responce.status(200).json({ msg: 'signup sucessfull' });
	} catch (error) {
		return responce.status(500).json({ msg: 'Error while signing up...' });
	}
}



export const login = async(request, response) => {
	// console.log("request ==> ",request.body)
	try {
		const admin = await Admin.findOne({username: request.body.username});
		if(!admin) response.status(404).json({message: "User does not exist"})
		else{
			const isPasswordMatch = await bcrypt.compare(request.body.password, admin.password);
			if(isPasswordMatch) response.status(200).json({authorized: true})
			else{response.status(401).json({authorized: false})}
		}
	} catch (error) {
		response.status(401).json({message: error.message})
	}
}