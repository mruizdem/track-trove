import React, { useEffect, useState } from "react";
import {
	fetchTopArtists,
	fetchTopTracks,
	fetchUserData,
} from "../services/SpotifyService";
import TopLists from "../components/dash/TopLists";
import TopData from "../components/dash/TopData";
import { useNavigate } from "react-router-dom";
import HeaderSmall from "../components/HeaderSmall";
import TimeRangeBtn from "../components/dash/TimeRangeBtn";
import UserInfo from "../components/dash/UserData";

const UserDash = (props) => {
	const token = sessionStorage.getItem("token");
	const [userData, setUserData] = useState("");
	const [topArtists, setTopArtists] = useState([]);
	const [topTracks, setTopTracks] = useState([]);
	const [selectedRange, setSelectedRange] = useState("medium_term");
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		// if the token exists, proceed otherwise redirect to home page
		if (token) {
			// fetch user data
			fetchUserData(token)
				.then((res) => {
					setUserData(res);
					setLoading(false);
				})
				.catch((err) => console.error(err));

			// fetch top artists
			fetchTopArtists(token, selectedRange)
				.then((res) => setTopArtists(res))
				.catch((err) => console.log(err));

			// fetch top tracks
			fetchTopTracks(token, selectedRange)
				.then((res) => setTopTracks(res))
				.catch((err) => console.log(err));
		} else {
			navigate("/");
		}
	}, [token, selectedRange, navigate]);

	return (
		<>
			{/* header component */}
			<HeaderSmall
				titleText={`Welcome, ${userData.display_name}!`}
				linkOneText={"Generate New Playlists"}
				linkOnePath={"/playlist/create"}
				linkTwoText={"View Community Playlists"}
				linkTwoPath={"/playlist"}
			/>

			{/* user data component */}
			<UserInfo loading={loading} userData={userData} />

			<hr className="my-3" />

			{/* data range control buttons */}
			<div className="flex justify-evenly items-center gap-5 mb-10">
				<TimeRangeBtn
					range={selectedRange}
					setRange={setSelectedRange}
					text={"Past Year"}
					value={"long_term"}
				/>
				<TimeRangeBtn
					range={selectedRange}
					setRange={setSelectedRange}
					text={"Past 6 Months"}
					value={"medium_term"}
				/>
				<TimeRangeBtn
					range={selectedRange}
					setRange={setSelectedRange}
					text={"Past 4 Weeks"}
					value={"short_term"}
				/>
			</div>

			{/* genereate the lists of top data */}
			<TopLists topArtists={topArtists} topTracks={topTracks} />

			<hr className="my-5" />

			{/* genereate the charts for top data */}
			<TopData topArtists={topArtists} />

			<hr className="my-5" />

			{/* return home link */}
			<div className="text-center mb-10">
				<a className="link" href="/">
					Go back home
				</a>
			</div>
		</>
	);
};

export default UserDash;
