import React, { useState } from "react";

const TopLists = (props) => {
	const { topArtists, topTracks } = props;
	return (
		<div className="flex gap-5">
			{/* artists */}
			<ol className="w-1/2 text-center">
				<p className="font-bold">Your Top 10 Artists</p>
				<hr className="w-1/2 mx-auto my-1" />
				{topArtists.map((artist, index) => (
					<li key={index}>
						{index + 1}. {artist.name}
					</li>
				))}
			</ol>
			{/* tracks */}
			<ol className="w-1/2 text-center">
				<p className="font-bold">Your Top 10 Tracks</p>
				<hr className="w-1/2 mx-auto my-1" />
				{topTracks.map((track, index) => (
					<li key={index}>
						{index + 1}. {track.name}
					</li>
				))}
			</ol>
		</div>
	);
};

export default TopLists;
