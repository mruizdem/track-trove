import React, { useEffect, useState } from "react";
import { fetchApiData } from "../services/BackendService";

const CLIENT_ID = "26bb5948d08f40bb8062c670b03e50e5";
const CLIENT_SECRET = "5a04647ac56941aa801aa9eecd93b367";
const REDIRECT_URI = "http://localhost:5173/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const Home = (props) => {
	const { accessToken } = props;
	const [userData, setUserData] = useState("");

	return (
		<div>
			<h1 className="text-3xl font-bold underline text-center mt-10">
				Home View Testing!
			</h1>
			<div className="text-center">
				<a
					className="underline text-red-500"
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
				>
					Sign into Spotify
				</a>
			</div>
		</div>
	);
};

export default Home;
