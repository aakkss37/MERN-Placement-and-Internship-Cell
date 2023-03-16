import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const JWTvalidation = (req, resp, next) => {
	const authTokan = req.body.aaccessToken
	// console.log(authTokan)
	const token = authTokan && authTokan.split(' ')[1];
	if (token == null) {
		return resp.status(401).json({ msg: "Token is missing" });
	}
	Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (error, student) => {
		if (error) {
			return resp.status(403).json({ msg: "invalid token" });
		}
		// console.log("request ==> ", req);
		// console.log("student value: ===> ", student)
		req.student = student; // Add "student" object as a property of req object, which can be accessed by next middleware in the chain. 
		// next() function is used to pass control to the next middleware function in the chain after verifying the JWT token.
		next();
	})
}
