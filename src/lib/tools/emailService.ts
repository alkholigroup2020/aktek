import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import type { SendMailOptions } from 'nodemailer';
// import type { SentMessageInfo } from 'nodemailer';

import { INFO_PASSWORD } from '$env/static/private';

// Create a reusable transporter object using the default SMTP transport
const transporter: Transporter = nodemailer.createTransport({
	host: 'alkholi.alkholi.com', // replace with your email host
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: 'info1@alkholi.com', // replace with your email
		pass: INFO_PASSWORD // replace with your email password
	},
	tls: {
		rejectUnauthorized: false
	}
});

// Async function to send an email
export const sendEmail = async (
	to: string,
	subject: string,
	text: string,
	html: string,
	attachments: { filename: string; content: Buffer }[] = []
): Promise<void> => {
	// email options
	const mailOptions: SendMailOptions = {
		from: 'Info.Alkholi@alkholi.com',
		to: to,
		subject: subject,
		text: text,
		html: html,
		attachments: attachments
	};
	// send email with defined transport object
	// eslint-disable-next-line no-useless-catch
	try {
		await transporter.sendMail(mailOptions);
		// const info: SentMessageInfo = await transporter.sendMail(mailOptions);
		// console.log('Message sent: %s', info.messageId);
	} catch (error) {
		// console.log('Error occurred while sending email: ', error);
		throw error;
	}
};
