import axios from 'axios';

const path = process.env.PUBLIC_URL;

export const getMember = async () => {
	const url = path + '/DB/member.json';
	return await axios.get(url);
};

export const getYoutube = async () => {
	const key = 'AIzaSyDXkbK7JOz1GmisiXd0C5iKd_FmEK3uk3o';
	const numVid = 4;
	const idVid = 'PL5cy3lFO3Tzo5tZ8n_R7SNNvM6kxv4Xaf';
	const urlVid = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${numVid}&playlistId=${idVid}`;

	return await axios.get(urlVid);
};

export const getGallery = async () => {
	const key = 'cfb398b73c61a4facf20c641274d8954';
	const method_album = 'flickr.photosets.getPhotos';
	const num = 20;
	const username = '195365059@N08';
	const photoset_id = '72177720298076992';
	const url = `https://www.flickr.com/services/rest/?method=${method_album}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}&photoset_id=${photoset_id}`;

	return await axios.get(url);
};
