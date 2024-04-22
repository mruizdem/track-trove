import axios from "axios";

const http = axios.create({
	baseURL: "https://api.spotify.com/v1",
});

// fetch user data (base)
// /me
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
// /me/top/artists
const fetchTopArtists = (token) => {
	return http
		.get("/me/top/artists?limit=10", {
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
// /me/top/tracks
const fetchTopTracks = (token) => {
	return http
		.get("/me/top/tracks?limit=10", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => res.data.items)
		.catch((err) => {
			throw err;
		});
};

export { fetchUserData, fetchTopArtists, fetchTopTracks };
