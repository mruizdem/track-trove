import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { useState } from "react";
import HandleCallback from "./views/Callback";
import UserDash from "./views/UserDash";

function App() {
	const [accessToken, setAccessToken] = useState("");
	return (
		<>
			<Routes>
				<Route index element={<Home accessToken={accessToken} />} />
				<Route
					path="/dashboard"
					element={<UserDash accessToken={accessToken} />}
				/>
				<Route
					path="/callback"
					element={<HandleCallback setAccessToken={setAccessToken} />}
				/>
			</Routes>
		</>
	);
}

export default App;
