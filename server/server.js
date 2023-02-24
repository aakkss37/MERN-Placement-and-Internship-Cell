import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


// EXPRESS INITIALIZATION
const app = express()



// APP CONFIGURATION
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// DATABASE CONNECTION
// import mongoseConnection from "./database/db.js";
// mongoseConnection(); 





// ROUTING
// import router from './router/routes.js';
// app.use('/', router)


const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})