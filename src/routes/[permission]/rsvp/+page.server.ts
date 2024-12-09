import { error } from '@sveltejs/kit';
import { google } from 'googleapis';

interface FormEntry {
	firstName: string;
	lastName: string;
	email: string | undefined;
	diet_requirements: string;
	accessibility_requirements: string;
	happy_marriage: string;
	song_requests: string;
	attend_reception: boolean | undefined;
	will_not_attend: boolean | undefined;
	attend_ceremony: boolean | undefined;
}

interface Entry {
	id: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	diet_requirements?: string;
	accessibility_requirements?: string;
	happy_marriage?: string;
	song_requests?: string;
	attend_reception?: boolean;
	will_not_attend?: boolean;
	attend_ceremony?: boolean;
}

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// const SPREADSHEET_ID = '1C1AWh1pdLQVht70DueyREP4uWfvhSRx1Wq5ovVfnqsE';
const SPREADSHEET_ID = '';
const RANGE = 'Sheet1!B2:Z1000'; // Adjust this based on your spreadsheet structure
export const actions = {
	default: async (event) => {
		try {
			const data = await event.request.formData();
			const result: { [key: string]: Partial<Entry> } = {};
			const ids = new Set(Array.from(data.keys()).map((key) => key.split('.')[0]));

			ids.forEach((id) => {
				result[id] = {
					attend_reception: false,
					will_not_attend: false,
					attend_ceremony: false
				};
			});

			data.forEach((value, key) => {
				const [id, field] = key.split('.') as [string, keyof FormEntry];

				if (
					field === 'attend_reception' ||
					field === 'attend_ceremony' ||
					field === 'will_not_attend'
				) {
					result[id][field] = value === 'on';
				} else {
					result[id][field] = value as string;
				}
			});

			const resultArray: Entry[] = Object.entries(result).map(([key, value]) => ({
				id: key,
				...value
			}));

			const insertResult = await insertDataIntoSheet(resultArray);

			if (!insertResult.success) {
				return {
					status: 400,
					body: {
						success: false,
						message: insertResult.error
					}
				};
			}
		} catch (e) {
			console.error('Form submission error:', e);
			throw error(500, 'An unexpected error occurred while processing your submission');
		}
	}
};

interface SheetResponse {
	success: boolean;
	error?: string;
}

async function insertDataIntoSheet(data: Entry[]): Promise<SheetResponse> {
	const auth = new google.auth.GoogleAuth({
		keyFile: 'cred.json',
		scopes: SCOPES
	});

	const sheets = google.sheets({ version: 'v4', auth });

	const values = data.map((entry) => [
		entry.id,
		entry.firstName,
		entry.lastName,
		entry.email,
		entry.diet_requirements,
		entry.accessibility_requirements,
		entry.happy_marriage,
		entry.song_requests,
		entry.attend_reception,
		entry.will_not_attend,
		entry.attend_ceremony
	]);

	try {
		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: SPREADSHEET_ID,
			range: RANGE,
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: values
			}
		});

		console.log('Data inserted successfully:', response.data);
		return { success: true };
	} catch (e) {
		console.error('Error inserting data:', e);
		throw error(500, `An unexpected error occurred while inserting data: ${data}`);
	}
}
