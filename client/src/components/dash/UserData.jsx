import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserInfo = (props) => {
	const { loading, userData } = props;
	console.log(userData);
	return (
		<div>
			{/* display for some userData */}
			{loading ? (
				<div className="text-center">Loading...</div>
			) : (
				<div className="flex justify-evenly">
					<img
						className="rounded-3xl mb-2"
						src={userData.images[1].url}
						alt="profile-pic"
					/>
					<div className="w-1/2 flex flex-col justify-center">
						<p className="text-3xl font-bold text-center mb-2">
							{userData.display_name}
						</p>
						<Link
							to={userData.external_urls.spotify}
							className="text-xl link text-center mb-2"
						>
							{userData.external_urls.spotify}
						</Link>
						<p className="text-xl text-center mb-2">
							<b>User ID:</b> {userData.id}
						</p>
						<p className="text-xl text-center mb-2">
							<b>Follower Count:</b> {userData.followers.total}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserInfo;
