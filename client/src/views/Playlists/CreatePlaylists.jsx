import React, { useEffect, useState } from "react";
import {
	fetchPlaylistsByCategory,
	fetchUserData,
} from "../../services/SpotifyService";
import PopUpBox from "../../components/playlists/CommunityPopUp";
import { useNavigate } from "react-router-dom";
import HeaderSmall from "../../components/HeaderSmall";
import SpotifyGrid from "../../components/playlists/PlaylistGridSpotify";

const CreatePlaylist = () => {
	const token = sessionStorage.getItem("token");
	const navigate = useNavigate();
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
		if (token) {
			fetchUserData(token)
				.then((res) => setUserData(res))
				.catch((err) => console.error(err));

			fetchPlaylistsByCategory(token, category, limit)
				.then((res) => setPlaylists(res))
				.catch((err) => console.error(err));
		} else {
			navigate("/");
		}
	}, []);

	// Fetch playlists based on category entered
	const handleSubmit = (e) => {
		e.preventDefault();
		fetchPlaylistsByCategory(token, category, limit)
			.then((res) => setPlaylists(res))
			.catch((err) => console.log(err));
	};

	// Handles the click of the add to comm btn, this will prep for database
	const handleCommunityAddition = (id, img, user) => {
		setShowPopUp(true);
		setCommPlaylist({
			...commPlaylist,
			playlist_id: id,
			playlist_img: img,
			spotify_user: user,
		});
	};

	return (
		<>
			{/* header component */}
			<HeaderSmall
				titleText={"Generate playlists!"}
				linkOneText={"Return to Dashboard"}
				linkOnePath={"/dashboard"}
				linkTwoText={"View Community Playlists"}
				linkTwoPath={"/playlist"}
			/>

			{/* user form to change category/limits */}
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="w-1/2 mx-auto mb-3">
					<label className="block font-bold mb-2">Category</label>
					<input
						className="form-input"
						id="category"
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						type="text"
					/>
				</div>
				<div className="w-1/2 mx-auto mb-3">
					<label className="block font-bold mb-2">How Many?</label>
					<input
						className="form-input"
						id="limit"
						onChange={(e) => setLimit(e.target.value)}
						value={limit}
						type="number"
						min={1}
						max={12}
					/>
				</div>
				<div className="w-1/4 mx-auto">
					<button className="btn-success w-full">Generate</button>
				</div>
			</form>

			<hr className="my-5" />

			{/* Grid for spotify generated playlists */}
			<div className="flex flex-col md:grid md:grid-cols-3 gap-3">
				{playlists.map((playlist, index) => (
					<SpotifyGrid
						key={index}
						playlist={playlist}
						handle={handleCommunityAddition}
						userData={userData}
					/>
				))}
			</div>

			{/* Render the pop-up box if showPopUp set to true */}
			{showPopUp && (
				<PopUpBox
					setShowPopUp={setShowPopUp}
					setPlaylist={setCommPlaylist}
					playlist={commPlaylist}
				/>
			)}
		</>
	);
};

export default CreatePlaylist;
