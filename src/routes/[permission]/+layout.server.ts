import { error } from '@sveltejs/kit';

export async function load(event) {
	const permission = event.params.permission;
	if (permission !== 'reception' && permission !== 'wedding') {
		throw error(400, 'Bad Request');
	} else return { permission };
}
