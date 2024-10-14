import type { Actions, PageServerLoad } from './$types.js';

import { superValidate, message } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

import { object, string } from 'yup';

import { sendEmail } from '$lib/tools/emailService';

const schema = object({
	name: string().required(),
	email: string().email().required(),
	mobile: string().required().min(10).max(10),
	textArea: string().required()
});

export const load: PageServerLoad = async () => {
	return { form: await superValidate(yup(schema)) };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, yup(schema));

		if (!form.valid) return fail(400, { form });

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
			undefined
		);

		return message(form, 'Form posted successfully!');
	}
};
