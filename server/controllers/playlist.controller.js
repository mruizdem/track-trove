import Playlist from "../models/playlist.model.js";

// CREATE
async function createPlaylist(req, res) {
    try {
        const playlist = await Playlist.create(req.body)
        return res.status(201).json(playlist)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// READ
async function getAllPlaylists(req, res) {
    try {
        const allPlaylists = await Playlist.find()
        return res.status(200).json(allPlaylists)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getOnePlaylist(req, res) {
    try {
        const id = req.params.id
        const playlist = await Playlist.findById(id)
        return res.status(200).json(playlist)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// UPDATE
async function updatePlaylistById(req, res) {
    try {
        const id = req.params.id
        const updatedPlaylist = await Playlist.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        return res.status(200).json(updatedPlaylist)
    } catch (error) {
        return res.status(500).json(error)
    }
}


// DELETE
async function deletePlaylistById(req, res) {
    try {
        const id = req.params.id
        await Playlist.findByIdAndDelete(id)
        return res.status(200).json({ message: "Playlist was removed successfully." })
    } catch (error) {
        return res.status(500).json(error)
    }
}


export { createPlaylist, getAllPlaylists, getOnePlaylist, updatePlaylistById, deletePlaylistById } 