import nodemailer, { Transporter } from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

interface MailData {
	name: string;
	email: string;
	subject: string;
	message: string;
}
interface MailOptions {
	from: string;
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

const EMAIL = 'facpgmu@gmail.com';
const EMAIL_PASSWORD = 'qpwoecj3j138cjcj22';
// re_cbx9LpjT_7axL8Mx77aLQHb7cXbM9MCLo;
if (!EMAIL || !EMAIL_PASSWORD) {
	console.log('none env');
	throw new Error('Email credentials not provided');
}

const transporter: Transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: EMAIL,
		pass: EMAIL_PASSWORD,
	},
	secure: false,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, subject, message }: MailData = req.body;
	const mailData = {
		from: email,
		to: email,
		subject: `Сообщение от ${name}, на тему ${subject}`,
		text: `${message} | Sent from: ${email}`,
		html: `<div>${message}</div><p>Sent from: ${email}</p>`,
	};

	if (!name || !email || !subject || !message) {
		return res.status(400).send({ message: 'Bad request' });
	}

	await new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err: Error | null, info) => {
			if (err) {
				reject(err);
				return res
					.status(500)
					.json({ error: err.message || 'Something went wrong' });
			} else {
				resolve(info.accepted);
				res.status(200).json({ message: 'Message sent!' });
			}
		});
	});

	return;
};

export default handler;
