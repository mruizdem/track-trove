import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import HandleCallback from "./views/Callback";
import UserDash from "./views/UserDash";
import Playlists from "./views/Playlists/Playlists";
import CreatePlaylist from "./views/Playlists/CreatePlaylists";
import UpdatePlaylist from "./views/Playlists/UpdatePlaylists";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/dashboard" element={<UserDash />} />
				<Route path="/callback" element={<HandleCallback />} />
				<Route path="/playlist" element={<Playlists />} />
				<Route path="/playlist/create" element={<CreatePlaylist />} />
				<Route path="/playlist/edit/:id" element={<UpdatePlaylist />} />
			</Routes>
		</>
	);
}

export default App;
