import React, { useEffect, useState } from "react";
import {
	fetchPlaylistsByCategory,
	fetchUserData,
} from "../../services/SpotifyService";
import PopUpBox from "../../components/playlists/CommunityPopUp";

const CreatePlaylist = (props) => {
	const token = sessionStorage.getItem("token");
	const [category, setCategory] = useState("dinner");
	const [limit, setLimit] = useState(12);
	const [playlists, setPlaylists] = useState([]);
	const [showPopUp, setShowPopUp] = useState(false);
	const [userData, setUserData] = useState("");
	const [commPlaylist, setCommPlaylist] = useState({
		title: "",
		playlist_id: "",
		playlist_img: "",
		spotify_user: "",
	});

	useEffect(() => {
		// fetch user data
		fetchUserData(token)
			.then((res) => setUserData(res))
			.catch((err) => console.error(err));

		fetchPlaylistsByCategory(token, category, limit)
			.then((res) => setPlaylists(res))
			.catch((err) => console.error(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchPlaylistsByCategory(token, category, limit)
			.then((res) => setPlaylists(res))
			.catch((err) => console.log(err));
	};

	const handleCommunityAddition = (id, img, user) => {
		setShowPopUp(true);
		setCommPlaylist({
			...commPlaylist,
			playlist_id: id,
			playlist_img: img,
			spotify_user: user,
		});
	};

	const handleClosePopUp = () => {
		setShowPopUp(false);
	};

	return (
		<div className="mt-5 mb-3">
			<div className="text-center">
				<h1 className="text-5xl text-center text-white mb-3">
					Generate a playlist!
				</h1>
				<a href="/dashboard" className="link">
					Return to Dash
				</a>
			</div>

			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="w-1/2 mx-auto mb-3">
					<label className="block font-bold mb-2">Category</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
						id="category"
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						type="text"
					/>
				</div>
				<div className="w-1/2 mx-auto mb-3">
					<label className="block font-bold mb-2">How Many?</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
						id="limit"
						onChange={(e) => setLimit(e.target.value)}
						value={limit}
						type="number"
						min={1}
						max={12}
					/>
				</div>
				<div className="w-1/4 mx-auto">
					<button className="btn-success w-full">Submit</button>
				</div>
			</form>

			<hr className="my-5" />

			<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
				{playlists.map((playlist, index) => (
					<div
						key={index}
						className="relative rounded overflow-hidden text-center"
					>
						<a href={`https://open.spotify.com/playlist/${playlist.id}`}>
							<img
								src={playlist.images[0]["url"]}
								alt="playlist_img"
								className="w-full mb-3 hover:scale-105"
							/>
						</a>
						<button
							onClick={() =>
								handleCommunityAddition(
									playlist.id,
									playlist.images[0]["url"],
									userData.id
								)
							}
							className="btn-success text-xs mb-3"
						>
							Add to Community!
						</button>
						<p className="font-bold">{playlist.name}</p>
						<p className="italic">{playlist.description}</p>
					</div>
				))}
			</div>

			{/* Render the pop-up box if showPopUp set to true */}
			{showPopUp && (
				<PopUpBox
					onClose={handleClosePopUp}
					setPlaylist={setCommPlaylist}
					playlist={commPlaylist}
				/>
			)}
		</div>
	);
};

export default CreatePlaylist;
