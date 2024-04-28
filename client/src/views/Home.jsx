import HeaderSmall from "../components/HeaderSmall";

const Home = (props) => {
	const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
	const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
	const REDIRECT_URI = "http://localhost:5173/callback";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	return (
		<>
			<HeaderSmall
				titleText={"Track Trove"}
				linkOneText={"Sign into Spotify"}
				linkOnePath={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
				linkTwoText={"View Community Playlists"}
				linkTwoPath={"/playlist"}
			/>
		</>
	);
};

export default Home;
