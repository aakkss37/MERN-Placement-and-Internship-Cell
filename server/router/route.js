import express from "express";
import { loginStudent } from "../controllers/login.js";
const router = express.Router();


router.post('/login', loginStudent)



export default router