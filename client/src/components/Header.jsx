import React, { useState } from "react";

const Header = (props) => {
	const { userData } = props;

	return (
		<div className="flex justify-between items-center">
			<div className="text-center">
				<img
					className="rounded-full mb-2"
					src={userData.images[1].url}
					alt="profile-pic"
				/>
				<p className="mb-2">{userData.display_name}</p>
				<p className="mb-2">Follower Count: {userData.followers.total}</p>
			</div>
			<h1 className="text-4xl font-bold">Welcome, {userData.display_name}</h1>
		</div>
	);
};

export default Header;
