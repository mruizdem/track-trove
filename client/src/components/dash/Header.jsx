import React, { useState } from "react";

const Header = (props) => {
	const { userData, linkOne, linkTwo } = props;

	return (
		<header className="flex justify-between mt-10">
			<div className="text-center">
				<img
					className="rounded-full mb-2"
					src={userData.images[1].url}
					alt="profile-pic"
				/>
				<p className="mb-2">{userData.display_name}</p>
				<p className="mb-2">Follower Count: {userData.followers.total}</p>
			</div>
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-3">
					Welcome, {userData.display_name}
				</h1>
				<a className="link block mb-3" href="/playlist/create">
					{linkOne}
				</a>
				<a className="link" href="/playlist">
					{linkTwo}
				</a>
			</div>
		</header>
	);
};

export default Header;
