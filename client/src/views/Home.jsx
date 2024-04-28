import React, { useEffect, useState } from "react";

// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const Home = (props) => {
	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
	const REDIRECT_URI = "http://localhost:5173/callback";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";
	const testing = import.meta.env.VITE_TESTING;

	return (
		<div>
			<h1 className="text-3xl font-bold underline text-center mt-10">
				Home View Testing!
			</h1>
			<h2>{testing}</h2>
			<div className="text-center">
				<a
					className="link"
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
				>
					Sign into Spotify
				</a>
			</div>
		</div>
	);
};

export default Home;
