import React, { useEffect, useState } from "react";
import { fetchPlaylists } from "../../services/BackendService";
import { fetchUserData } from "../../services/SpotifyService";

const Playlists = (props) => {
	const token = sessionStorage.getItem("token");
	const [allPlaylists, setAllPlaylists] = useState([]);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		fetchPlaylists()
			.then((res) => setAllPlaylists(res))
			.catch((err) => console.log(err));

		fetchUserData(token)
			.then((res) => setUserId(res.id))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		fetchPlaylists()
			.then((res) => setAllPlaylists(res))
			.catch((err) => console.log(err.message));
	}, [allPlaylists]);

	return (
		<div>
			<h1 className="text-5xl text-center mt-5 mb-3">
				Community Playlist Wall!
			</h1>
			<div className="text-center">
				<a href="/dashboard" className="link block mb-3">
					Return to Dash
				</a>
				<a href="/" className="link">
					Back Home
				</a>
			</div>

			<hr className="my-5" />

			<div className="flex flex-col md:grid md:grid-cols-3 gap-3 mb-5">
				{allPlaylists.map((playlist, index) => (
					<div
						key={index}
						className="relative rounded overflow-hidden text-center"
					>
						<a
							href={`https://open.spotify.com/playlist/${playlist.playlist_id}`}
						>
							<img
								src={playlist.playlist_img}
								alt="playlist_img"
								className="w-full mb-3 hover:scale-105"
							/>
						</a>
						<p className="font-bold">{playlist.title}</p>
						<p className="italic">Uploaded By: {playlist.spotify_user}</p>
						{playlist.spotify_user === userId ? (
							<a href={`/playlist/edit/${playlist._id}`} className="link">
								Edit Playlist
							</a>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};

export default Playlists;
