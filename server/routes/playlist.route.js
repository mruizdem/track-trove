import { Router } from "express";
import { createPlaylist, deletePlaylistById, getAllPlaylists, getOnePlaylist, updatePlaylistById } from "../controllers/playlist.controller.js";
const router = Router()

router.route('/playlist/create')
    .post(createPlaylist)

router.route('/playlist')
    .get(getAllPlaylists)

router.route('/playlist/edit/:id')
    .get(getOnePlaylist)
    .put(updatePlaylistById)
    .delete(deletePlaylistById)

export default router