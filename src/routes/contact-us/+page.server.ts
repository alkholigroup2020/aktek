import type { Actions, PageServerLoad } from './$types.js';
import { sendEmail } from '$lib/tools/emailService';
import { superValidate, message, withFiles, setError } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { translateServer } from '$lib/i18n/translator';
import { object, string, mixed } from 'yup';

const schema = object({
	name: string().required(),
	email: string().email().required(),
	mobile: string().required().min(10).max(10),
	textArea: string().required()
});

const joinUsSchema = object({
	name: string().required(),
	email: string().email().required(),
	mobile: string().required().min(10).max(10),
	textArea: string().required(),
	employeeCV: mixed()
});

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(yup(schema)),
		joinUsForm: await superValidate(yup(joinUsSchema))
	};
};

export const actions: Actions = {
	gotQuestion: async ({ request }) => {
		const gotQuestionForm = await superValidate(request, yup(schema));

		if (!gotQuestionForm.valid) return fail(400, { gotQuestionForm });

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
		
				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 40px 30px 40px 30px;">
						<span style="color: rgb(255 255 255 ); font-size: 24px; line-height: 1.4; font-weight:600">
							Message From "Got A Question" Section
						</span>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 40px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Name:</strong>${gotQuestionForm.data.name}</p>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Email:</strong>${gotQuestionForm.data.email}</p>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Mobile:</strong>${gotQuestionForm.data.mobile}</p>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Message:</strong>${gotQuestionForm.data.textArea}</p>
					</td>
				</tr>

				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 10px 10px;">
						<span style="color: rgb(255 255 255 ); font-size: 20px;">AKTEK Website.</span>
					</td>
				</tr>

			</table>
		`;

		await sendEmail(
			'fawzy.mohamed@alkholi.com',
			'AKTEK Website Messages.',
			emailTemplate,
			emailTemplate,
			undefined
		);

		return message(gotQuestionForm, 'Form posted successfully!');
	},

	joinUs: async ({ request, cookies }) => {
		// Retrieve the value of the 'preferredLocale' cookie from the user's cookies.
		// This value could be 'en', 'ar', or potentially undefined if the cookie is not set.
		const localeValue = cookies.get('preferredLocale');

		// Define a type guard function that ensures a value is either 'en' or 'ar'.
		// This function will return true if the value is exactly 'en' or 'ar', and false otherwise.
		const isLocale = (value: unknown): value is 'en' | 'ar' => value === 'en' || value === 'ar';

		// Use the type guard function to determine if localeValue is either 'en' or 'ar'.
		// If it is, assign it to `locale`; if not, default `locale` to 'en'.
		// This guarantees that `locale` will always be either 'en' or 'ar', avoiding `undefined`.
		const locale: 'en' | 'ar' = isLocale(localeValue) ? localeValue : 'en';

		const formData = await request.formData();

		const form = await superValidate(formData, yup(joinUsSchema));

		if (!form.valid) return fail(400, withFiles({ form }));

		const file = formData.get('employeeCV');

		if (file instanceof File) {
			// Validate and process the file.

			// Ensure the file is actually attached
			if (file.name === 'undefined') {
				return setError(form, 'employeeCV', translateServer(locale, 'contact.join.attach'));
			}

			// Step 1: Validate file type
			const allowedTypes = [
				'application/pdf',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			];
			if (!allowedTypes.includes(file.type)) {
				return setError(form, 'employeeCV', translateServer(locale, 'contact.join.type'));
			}

			// Step 2: Validate file size (set max size to 5MB)
			const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
			if (file.size > maxFileSize) {
				return setError(form, 'employeeCV', translateServer(locale, 'contact.join.size'));
			}

			// Convert file to buffer and create an attachment object for the email
			const buffer = await file.arrayBuffer();

			const attachment = {
				filename: file.name,
				content: Buffer.from(buffer)
			};

			const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">

				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 40px 30px 40px 30px;">
						<span style="color: rgb(255 255 255 ); font-size: 24px; line-height: 1.4; font-weight:600">
							Message From "Want To Join Our Team" Section
						</span>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 40px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Name:</strong>${form.data.name}</p>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Email:</strong>${form.data.email}</p>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Mobile:</strong>${form.data.mobile}</p>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Message:</strong>${form.data.textArea}</p>
					</td>
				</tr>

				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 10px 10px;">
						<span style="color: rgb(255 255 255 ); font-size: 20px;">AKTEK Website.</span>
					</td>
				</tr>

			</table>
			`;

			await sendEmail(
				'fawzy.mohamed@alkholi.com',
				'AKTEK Website Messages.',
				emailTemplate,
				emailTemplate,
				[attachment]
			);

			return withFiles({ form });
		} else {
			return fail(400, withFiles({ form }));
		}
	}
};
