import dotenv from 'dotenv'
dotenv.config()

async function fetchSpotifyData(req, res) {
    try {
        const data = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export { fetchSpotifyData }