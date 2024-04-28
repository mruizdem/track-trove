import React, { useEffect, useState } from "react";
import { fetchOnePlaylist } from "../../services/BackendService";
import { useParams } from "react-router-dom";
import HeaderSmall from "../../components/HeaderSmall";
import SinglePlaylist from "../../components/playlists/PlaylistOne";

const UpdatePlaylist = () => {
	const { id } = useParams();
	const [playlist, setPlaylist] = useState({ title: "" });

	useEffect(() => {
		fetchOnePlaylist(id)
			.then((res) => setPlaylist(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{/* Header component */}
			<HeaderSmall
				titleText={"Update Your Playlist!"}
				linkOneText={"Return to Community"}
				linkOnePath={"/playlist"}
				linkTwoText={"Back to Dashboard"}
				linkTwoPath={"/dashboard"}
			/>

			<SinglePlaylist playlist={playlist} />
		</>
	);
};

export default UpdatePlaylist;
