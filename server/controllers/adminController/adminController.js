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