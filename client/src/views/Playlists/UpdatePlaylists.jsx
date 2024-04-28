import React, { useEffect, useState } from "react";
import {
	deletePlaylist,
	fetchOnePlaylist,
	updatePlaylist,
} from "../../services/BackendService";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePlaylist = (props) => {
	const { id } = useParams();
	const [playlist, setPlaylist] = useState({ title: "" });
	const navigate = useNavigate();

	useEffect(() => {
		fetchOnePlaylist(id)
			.then((res) => setPlaylist(res))
			.catch((err) => console.log(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		updatePlaylist(playlist)
			.then((res) => res)
			.catch((err) => console.log(err));
		navigate("/playlist");
	};

	const handleDelete = () => {
		deletePlaylist(playlist._id)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		navigate("/playlist");
	};

	return (
		<>
			<div className="w-1/2 mx-auto rounded overflow-hidden text-center mt-5 shadow-lg shadow-green-500/75">
				<a href={`https://open.spotify.com/playlist/${playlist.playlist_id}`}>
					<img
						src={playlist.playlist_img}
						alt="playlist_img"
						className="w-full mb-3 hover:scale-105 "
					/>
				</a>
				<div className="flex justify-center items-center gap-5">
					<p className="italic">Uploaded By: {playlist.spotify_user}</p>
					<button
						onClick={() => handleDelete()}
						className="inline-flex items-center justify-center rounded-xl bg-red-700 py-2 px-4 font-bold text-sm text-white shadow-lg shadow-red-700/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
					>
						Delete
					</button>
				</div>
				<form className="p-5" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="block font-bold mb-2">Title</label>
						<input
							onChange={(e) =>
								setPlaylist({ ...playlist, title: e.target.value })
							}
							value={playlist.title}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none"
							type="text"
						/>
					</div>
					<button className="btn-success w-full">Submit</button>
				</form>
			</div>
		</>
	);
};

export default UpdatePlaylist;
