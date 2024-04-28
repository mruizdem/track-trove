const SpotifyGrid = (props) => {
	const { playlist, handle, userData } = props;
	return (
		<>
			<div className="relative rounded overflow-hidden text-center">
				<a href={`https://open.spotify.com/playlist/${playlist.id}`}>
					<img
						src={playlist.images[0]["url"]}
						alt="playlist_img"
						className="w-full mb-3 hover:scale-105"
					/>
				</a>
				<button
					onClick={() =>
						handle(playlist.id, playlist.images[0]["url"], userData.id)
					}
					className="btn-success text-xs mb-3"
				>
					Add to Community!
				</button>
				<p className="font-bold">{playlist.name}</p>
				<p className="italic">{playlist.description}</p>
			</div>
		</>
	);
};

export default SpotifyGrid;
