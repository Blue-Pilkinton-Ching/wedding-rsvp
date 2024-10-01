import { error } from '@sveltejs/kit';

export async function load(event) {
	const permission = event.params.permission;
	if (permission !== 'reception' && permission !== 'ceremony') {
		throw error(400, 'Bad Request');
	} else return { permission };
}
