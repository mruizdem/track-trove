import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:8000/api",
});

// POST REQUESTS
const createPlaylist = (playlistData) => {
	return http
		.post("/playlist/create", playlistData)
		.then((res) => res.data)
		.catch((err) => {
			throw err.response.data.errors;
		});
};

// GET REQUESTS
const fetchPlaylists = () => {
	return http
		.get("/playlist")
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

const fetchOnePlaylist = (playlist_id) => {
	return http
		.get(`/playlist/edit/${playlist_id}`)
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

// PUT
const updatePlaylist = (playlist) => {
	return http
		.put(`playlist/edit/${playlist._id}`, playlist)
		.then((res) => res.data)
		.catch((err) => {
			throw err.response.data.errors;
		});
};

// DELETE
const deletePlaylist = (playlist_id) => {
	return http
		.delete(`playlist/edit/${playlist_id}`)
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

export {
	createPlaylist,
	fetchPlaylists,
	fetchOnePlaylist,
	updatePlaylist,
	deletePlaylist,
};
