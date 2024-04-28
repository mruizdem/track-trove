import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HandleCallback = (props) => {
	const navigate = useNavigate();

	useEffect(() => {
		const hasParams = new URLSearchParams(window.location.hash.substring(1));
		const token = hasParams.get("access_token");

		if (token) {
			sessionStorage.setItem("token", token);
		}
		navigate("/dashboard");
	}, []);

	return (
		<div>
			<h1>You should not see this page</h1>
		</div>
	);
};

export default HandleCallback;
