import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import dbConnect from "./config/mongoose.config.js";
import playlistRouter from "./routes/playlist.route.js";
import spotifyRouter from './routes/spotify.route.js'

const app = express();
app.use(express.json(), cors())

// Mounting Routers
app.use("/api", spotifyRouter)
app.use("/api", playlistRouter)


dotenv.config()
const PORT = process.env.PORT

// DB Connection
dbConnect()

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));