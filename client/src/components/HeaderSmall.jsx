import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderSmall = (props) => {
	const { titleText, linkOneText, linkOnePath, linkTwoText, linkTwoPath } =
		props;

	return (
		<header>
			<h1 className="text-5xl text-center my-5">{titleText}</h1>
			<div className="flex justify-center gap-5 items-center mb-5">
				<Link to={`${linkOnePath}`} className="btn-success">
					{linkOneText}
				</Link>
				<Link to={`${linkTwoPath}`} className="btn-success">
					{linkTwoText}
				</Link>
			</div>
			<hr className="my-5" />
		</header>
	);
};

export default HeaderSmall;
