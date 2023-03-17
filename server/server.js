import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// EXPRESS INITIALIZATION
const app = express()



// APP CONFIGURATION
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// DATABASE CONNECTION
import mongoseConnection from "./db/db.js";
mongoseConnection(); 



// ROUTING
import router from './router/route.js';
import { sendMail } from './utils/sendMail.js';
app.use('/', router)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})