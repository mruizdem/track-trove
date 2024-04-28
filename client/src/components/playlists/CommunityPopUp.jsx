import { createPlaylist } from "../../services/BackendService";
import { useNavigate } from "react-router-dom";

const PopUpBox = (props) => {
	const { setShowPopUp, playlist, setPlaylist } = props;
	const navigate = useNavigate();

	// Add playlist to database and navigate to community
	const handleSubmit = (e) => {
		e.preventDefault();
		createPlaylist(playlist)
			.then((res) => res)
			.catch((err) => console.log(err));
		navigate("/playlist");
	};
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-black border border-white p-6 rounded shadow-md">
				<h2 className="text-lg font-bold text-center">Add to Community</h2>
				<p className="text-center italic mb-4">Give it a title!</p>

				{/* Small Form to intake title */}
				<form onSubmit={handleSubmit}>
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
					<button type="submit" className="btn-success w-full">
						Submit
					</button>
				</form>

				{/* SVG setup for a close button in top right of screen */}
				<button
					onClick={() => setShowPopUp(false)}
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
