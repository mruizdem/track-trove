import axios from "axios";

const http = axios.create({
	baseURL: "https://api.spotify.com/v1",
});

// fetch user data (base)
const fetchUserData = (token) => {
	return http
		.get("/me", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => res.data)
		.catch((err) => {
			throw err.message;
		});
};

// fetch user top artists
const fetchTopArtists = (token, time_range = "medium_term") => {
	return http
		.get(`/me/top/artists?time_range=${time_range}&limit=10`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => res.data.items)
		.catch((err) => {
			throw err;
		});
};

// fetch user top tracks
const fetchTopTracks = (token, time_range = "medium_term") => {
	return http
		.get(`/me/top/tracks?time_range=${time_range}&limit=10`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => res.data.items)
		.catch((err) => {
			throw err;
		});
};

// fetch playlists by category & limit
const fetchPlaylistsByCategory = (token, category, limit) => {
	return http
		.get(`/browse/categories/${category}/playlists?limit=${Number(limit)}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => res.data.playlists.items)
		.catch((err) => {
			throw err.response.data.error.message;
		});
};

export {
	fetchUserData,
	fetchTopArtists,
	fetchTopTracks,
	fetchPlaylistsByCategory,
};
