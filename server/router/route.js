import express from "express";
import { alreadyLogedIn } from "../controllers/alreadyLogedIn.js";
import { JWTvalidation } from "../controllers/JWT-validation.js";
import { loginStudent } from "../controllers/login.js";
const router = express.Router();


router.post('/login', loginStudent)
router.post('/validate-access-tokan', JWTvalidation, alreadyLogedIn)


export default router