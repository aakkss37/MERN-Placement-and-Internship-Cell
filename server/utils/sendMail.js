import nodemailer from 'nodemailer';
import  { google } from 'googleapis';
import dotenv from 'dotenv';
import { createEmailHTML } from './createEmail.js';
dotenv.config();


// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLEINT_SECRET,
	REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const sendMail = async(company)=> {
	try {
		const accessToken = await oAuth2Client.getAccessToken();

		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: 'amarfullstack.workspace.124@gmail.com',
				clientId: CLIENT_ID,
				clientSecret: CLEINT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken,
			},
		});
		const emailTemplate = createEmailHTML(company.companyName, company.jobType, company.jobRole, company.CTC, company.jobLocation)
		const mailOptions = {
			from: 'KAHE PIC <amarfullstack.workspace.124@gmail.com>',
			to: '20csu135@kahedu.edu.in',
			subject: 'Placement and Internship 	Cell',
			text: 'You are shortlisted for a new company. Please visite PIC website.',
			html: emailTemplate,
		};

		const result = await transport.sendMail(mailOptions);
		return result;
	} catch (error) {
		return error;
	}
}
