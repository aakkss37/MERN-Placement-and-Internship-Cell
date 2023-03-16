import express from "express";
import { alreadyLogedIn } from "../controllers/studentController/alreadyLogedIn.js";
import { JWTvalidation } from "../controllers/studentController/JWT-validation.js";
import { loginStudent } from "../controllers/studentController/login.js";
import { uploadImage } from "../controllers/adminController/companyLogoController.js";
import upload from '../utils/UploadFile.js';
import { addNewCompany } from "../controllers/adminController/companyController.js";
const router = express.Router();

// STUDENT LOGIN
router.post('/login', loginStudent)
router.post('/validate-access-tokan', JWTvalidation, alreadyLogedIn)



// ADMIN ROUTES
router.post('/file/upload', upload.single('file'), uploadImage);
router.post('/add-new-company', addNewCompany)
export default router