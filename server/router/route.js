import express from "express";
import { alreadyLogedIn } from "../controllers/studentController/alreadyLogedIn.js";
import { JWTvalidation } from "../controllers/studentController/JWT-validation.js";
import { loginStudent } from "../controllers/studentController/login.js";
const router = express.Router();

// STUDENT LOGIN
router.post('/login', loginStudent)
router.post('/validate-access-tokan', JWTvalidation, alreadyLogedIn)



// ADMIN ROUTES
export default router