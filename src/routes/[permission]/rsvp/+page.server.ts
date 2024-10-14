interface FormEntry {
	firstName: string;
	lastName: string;
	email: string | undefined;
	diet_requirements: string;
	accessibility_requirements: string;
	happy_marriage: string;
	song_requests: string;
	attend_reception: boolean | undefined;
	attend_ceremony: boolean | undefined;
}

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const result: { [key: string]: Partial<FormEntry> } = {};

		const ids = new Set(Array.from(data.keys()).map((key) => key.split('.')[0]));

		ids.forEach((id) => {
			result[id] = {
				attend_reception: false,
				attend_ceremony: false
			};
		});

		data.forEach((value, key) => {
			const [id, field] = key.split('.') as [string, keyof FormEntry];

			if (field === 'attend_reception' || field === 'attend_ceremony') {
				result[id][field] = value === 'on';
			} else {
				result[id][field] = value as string;
			}
		});

		const resultArray = Object.entries(result).map(([key, value]) => {
			return {
				id: key,
				...value
			};
		});

		console.log(resultArray);
	}
};
