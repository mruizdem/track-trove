import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:8000/api",
});

// PASS SENSITIVE INFO
const fetchApiData = () => {
	return http
		.get("/spotify-data")
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};

export { fetchApiData };
