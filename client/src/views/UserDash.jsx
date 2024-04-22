import React, { useEffect, useState } from "react";
import {
	fetchTopArtists,
	fetchTopTracks,
	fetchUserData,
} from "../services/SpotifyService";
import Header from "../components/Header";
import Charts from "../components/Charts";

const UserDash = (props) => {
	const { accessToken } = props;
	const token = sessionStorage.getItem("token");
	const [userData, setUserData] = useState({});
	const [topArtists, setTopArtists] = useState([]);
	const [topTracks, setTopTracks] = useState([]);

	useEffect(() => {
		// fetch user data
		fetchUserData(token)
			.then((res) => setUserData(res))
			.catch((err) => console.error(err));

		// fetch top artists
		fetchTopArtists(token)
			.then((res) => setTopArtists(res))
			.catch((err) => console.log(err));

		// fetch top tracks
		fetchTopTracks(token)
			.then((res) => setTopTracks(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{userData.display_name ? (
				<div className="w-3/4 mx-auto mt-5">
					<Header userData={userData} />
					<hr className="my-3" />
					<div className="flex gap-5">
						<ol className="w-1/2 text-center">
							<p className="font-bold">Your Top 10 Artists</p>
							<hr className="w-1/2 mx-auto my-1" />
							{topArtists.map((artist, index) => (
								<li key={index}>
									{index + 1}. {artist.name}
								</li>
							))}
						</ol>
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
					<hr className="my-3" />
					<div className="text-center">
						<a className="text-blue-300 hover:text-blue-500 underline" href="/">
							Go back home
						</a>
					</div>
				</div>
			) : (
				<div className="text-center">
					<a href="/">Go back home</a>
				</div>
			)}
			<div className="w-3/4 mx-auto mb-10">
				<Charts chartData={topArtists} />
			</div>
		</div>
	);
};

export default UserDash;
