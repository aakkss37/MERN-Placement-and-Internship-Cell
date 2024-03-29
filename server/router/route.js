import express from "express";
import { alreadyLogedIn } from "../controllers/studentController/alreadyLogedIn.js";
import { JWTvalidation } from "../controllers/studentController/JWT-validation.js";
import { loginStudent } from "../controllers/studentController/login.js";
import { getImage, uploadImage } from "../controllers/adminController/companyLogoController.js";
import upload from '../utils/UploadFile.js';
import { addNewCompany, deleteCompanyDetails, getCompanyDetails, getListedCompanyList, updateCompanyDetails } from "../controllers/adminController/companyController.js";
import { getPlacementDriveList } from "../controllers/studentController/driveList.js";
import { chnagePassword, createAdmin, login } from "../controllers/adminController/adminController.js";
const router = express.Router();

// STUDENT LOGIN
router.post('/login', loginStudent)
router.post('/validate-access-tokan', JWTvalidation, alreadyLogedIn)
router.get('/get-placement-drive-list', getPlacementDriveList)



// ADMIN ROUTES
router.post('/create-admin', createAdmin)
router.post('/login-admin', login)
router.post('/chnage-password', chnagePassword)
router.post('/upload-company-logo', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/add-new-company', addNewCompany);
router.get('/get-company-list', getListedCompanyList);
router.get('/company-detail', getCompanyDetails);
router.put('/update-company-detail', updateCompanyDetails);
router.delete('/delete-company', deleteCompanyDetails);
export default router