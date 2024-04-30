const TopLists = (props) => {
	const { topArtists, topTracks } = props;
	// console.log(topArtists[0]);
	console.log(topTracks[0]);
	return (
		<div className="flex gap-5">
			{/* artists */}
			<div className="w-1/2">
				<p className="font-bold text-xl text-center">Your Top 10 Artists</p>
				<hr className="w-full mx-auto my-2" />
				<ol className="w-full text-center">
					{topArtists.map((artist, index) => (
						<div className="flex gap-5 items-center mb-5" key={index}>
							<img
								className="rounded-full h-16 w-16"
								src={artist.images[0]["url"]}
							/>
							<li>{artist.name}</li>
						</div>
					))}
				</ol>
			</div>

			{/* tracks */}
			<div className="w-1/2">
				<p className="font-bold text-xl text-center">Your Top 10 Tracks</p>
				<hr className="w-full mx-auto my-2" />
				<ol className="w-full text-center">
					{topTracks.map((track, index) => (
						<div className="flex gap-5 items-center mb-5" key={index}>
							<img
								className="rounded-full h-16 w-16"
								src={track.album.images[0]["url"]}
							/>
							<li>
								{track.name} by: <em>{track.artists[0].name}</em>
							</li>
						</div>
					))}
				</ol>
			</div>
		</div>
	);
};

export default TopLists;
