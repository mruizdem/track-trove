import { Schema, model } from "mongoose"

const playlistSchema = new Schema({
    title: {
        type: String,
        required: [true, "A title is required!"],
    },
    playlist_id: {
        type: String,
        required: true,
    },
    playlist_img: {
        type: String,
        required: true,
    },
    spotify_user: {
        type: String,
        required: true,
    },
}, { timestamps: true })
const Playlist = model("Playlist", playlistSchema)
export default Playlist