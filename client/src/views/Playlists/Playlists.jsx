import React, { useEffect, useState } from "react";
import { fetchPlaylists } from "../../services/BackendService";
import { fetchUserData } from "../../services/SpotifyService";
import HeaderSmall from "../../components/HeaderSmall";
import PlaylistGrid from "../../components/playlists/PlaylistGrid";

const Playlists = () => {
	const token = sessionStorage.getItem("token");
	const [allPlaylists, setAllPlaylists] = useState([]);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		// if token exists grab user data
		if (token) {
			fetchUserData(token)
				.then((res) => setUserId(res.id))
				.catch((err) => console.log(err));
		}

		// fetch playlists from db
		fetchPlaylists()
			.then((res) => setAllPlaylists(res))
			.catch((err) => console.log(err));
	}, []);

	// run another useEffect to check for updates to db
	useEffect(() => {
		fetchPlaylists()
			.then((res) => setAllPlaylists(res))
			.catch((err) => console.log(err.message));
	}, [allPlaylists]);

	return (
		<div>
			<HeaderSmall
				titleText={"Community Playlist Wall!"}
				linkOneText={"Return to Dashboard"}
				linkOnePath={"/dashboard"}
				linkTwoText={"Back Home"}
				linkTwoPath={"/"}
			/>

			{/* playlist grid */}
			<div className="flex flex-col md:grid md:grid-cols-3 gap-3 mb-5">
				{allPlaylists.map((playlist, index) => (
					<PlaylistGrid key={index} playlist={playlist} userId={userId} />
				))}
			</div>
		</div>
	);
};

export default Playlists;
