import { useNavigate } from "react-router-dom";
import { deletePlaylist, updatePlaylist } from "../../services/BackendService";

const SinglePlaylist = (props) => {
	const { playlist, setPlaylist } = props;
	const navigate = useNavigate();

	// updates the playlist, nav to community
	const handleSubmit = (e) => {
		e.preventDefault();
		updatePlaylist(playlist)
			.then((res) => res)
			.catch((err) => console.log(err));
		navigate("/playlist");
	};

	// removes the playlist, nav to community
	const handleDelete = () => {
		deletePlaylist(playlist._id)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		navigate("/playlist");
	};

	return (
		<>
			<div className="w-3/4 mx-auto rounded-lg bg-zinc-950 overflow-hidden text-center mt-5 pt-2 shadow-lg shadow-green-500/75">
				<a href={`https://open.spotify.com/playlist/${playlist.playlist_id}`}>
					<img
						src={playlist.playlist_img}
						alt="playlist_img"
						className="mx-auto shadow-md shadow-white/75 mb-3 hover:scale-105 "
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

				{/* update form */}
				<form className="p-5" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="block font-bold mb-2">Title</label>
						<input
							onChange={(e) =>
								setPlaylist({ ...playlist, title: e.target.value })
							}
							value={playlist.title}
							className="form-input"
							type="text"
						/>
					</div>
					<button className="btn-success w-full">Submit</button>
				</form>
			</div>
		</>
	);
};

export default SinglePlaylist;
