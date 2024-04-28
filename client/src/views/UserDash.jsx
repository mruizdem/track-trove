import React, { useEffect, useState } from "react";
import {
	fetchTopArtists,
	fetchTopTracks,
	fetchUserData,
} from "../services/SpotifyService";
import Header from "../components/dash/Header";
import TopLists from "../components/dash/TopLists";
import TopData from "../components/dash/TopData";

const UserDash = (props) => {
	const token = sessionStorage.getItem("token");
	const [userData, setUserData] = useState({});
	const [topArtists, setTopArtists] = useState([]);
	const [topTracks, setTopTracks] = useState([]);
	const [selectedRange, setSelectedRange] = useState("medium_term");

	useEffect(() => {
		// fetch user data
		fetchUserData(token)
			.then((res) => setUserData(res))
			.catch((err) => console.error(err));

		// fetch top artists
		fetchTopArtists(token, selectedRange)
			.then((res) => setTopArtists(res))
			.catch((err) => console.log(err));

		// fetch top tracks
		fetchTopTracks(token, selectedRange)
			.then((res) => setTopTracks(res))
			.catch((err) => console.log(err));
	}, [token, selectedRange]);

	const handleTimeRange = (token, time_range) => {
		setSelectedRange(time_range);
	};

	return (
		<>
			{/* data will only load if the user data is fetched */}
			{userData.display_name ? (
				<div className="w-full mx-auto mt-5">
					{/* header component */}
					<Header
						userData={userData}
						linkOne={"Generate Playlist"}
						linkTwo={"View Community Playlists"}
					/>

					<hr className="my-3" />

					{/* data range control buttons */}
					<div className="flex justify-center gap-8 items-center mb-10">
						<button
							className="btn-success"
							onClick={() => handleTimeRange(token, "long_term")}
						>
							{selectedRange === "long_term"
								? "Past Year (Selected)"
								: "Past Year"}
						</button>
						<button
							className="btn-success"
							onClick={() => handleTimeRange(token, "medium_term")}
						>
							{selectedRange === "medium_term"
								? "Past 6 Months (Selected)"
								: "Past 6 Months"}
						</button>
						<button
							className="btn-success"
							onClick={() => handleTimeRange(token, "short_term")}
						>
							{selectedRange === "short_term"
								? "Past 4 Weeks (Selected)"
								: "Past 4 Weeks"}
						</button>
					</div>

					<TopLists topArtists={topArtists} topTracks={topTracks} />
					<hr className="my-5" />
					<TopData topArtists={topArtists} />
					<hr className="my-5" />

					{/* return home link */}
					<div className="text-center mb-10">
						<a className="link" href="/">
							Go back home
						</a>
					</div>
				</div>
			) : (
				<div className="text-center mb-10">
					<a href="/">Go back home</a>
				</div>
			)}
		</>
	);
};

export default UserDash;
