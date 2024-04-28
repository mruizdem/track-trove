import { Link } from "react-router-dom";

const PlaylistGrid = (props) => {
	const { playlist, userId } = props;
	return (
		<>
			<div className="relative rounded overflow-hidden text-center">
				<a href={`https://open.spotify.com/playlist/${playlist.playlist_id}`}>
					<img
						src={playlist.playlist_img}
						alt="playlist_img"
						className="w-full mb-3 hover:scale-105"
					/>
				</a>
				<p className="font-bold">{playlist.title}</p>
				<p className="italic">Uploaded By: {playlist.spotify_user}</p>
				{playlist.spotify_user === userId ? (
					<Link to={`/playlist/edit/${playlist._id}`} className="link">
						Edit Playlist
					</Link>
				) : null}
			</div>
		</>
	);
};

export default PlaylistGrid;
