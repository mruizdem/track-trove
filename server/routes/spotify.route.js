import { Router } from "express";
import { fetchSpotifyData } from "../controllers/spotify.controller.js";
const router = Router()

router.route('/spotify-data')
    .get(fetchSpotifyData)

export default router