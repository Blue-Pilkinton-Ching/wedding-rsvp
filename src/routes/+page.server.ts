import { error } from '@sveltejs/kit';

export async function load() {
	throw error(400, 'Bad Request');
}
