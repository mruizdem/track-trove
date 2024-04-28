import React, { useState } from "react";
import { createPlaylist } from "../../services/BackendService";
import { useNavigate } from "react-router-dom";

const PopUpBox = (props) => {
	const { onClose, playlist, setPlaylist } = props;
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		createPlaylist(playlist)
			.then((res) => res)
			.catch((err) => console.log(err));
		setPlaylist({
			title: "",
			playlist_id: "",
			playlist_img: "",
			spotify_user: "",
		});
		onClose();
		navigate("/playlist");
	};
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-black border border-white p-6 rounded shadow-md">
				<h2 className="text-lg font-bold text-center">Add to Community</h2>
				<p className="text-center italic mb-4">Give it a title!</p>
				<form onSubmit={handleSubmit}>
					{/* Form inputs and submit button */}
					<div className="mb-3">
						<label className="block font-bold mb-2">Title</label>
						<input
							onChange={(e) =>
								setPlaylist({ ...playlist, title: e.target.value })
							}
							value={playlist.title}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<button type="submit" className="btn-success w-full">
						Submit
					</button>
				</form>
				<button
					onClick={onClose}
					className="absolute top-0 right-0 mt-2 mr-2 z-10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default PopUpBox;
