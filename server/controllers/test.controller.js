// placeholder file
async function (req, res) {
    try {
        const data = req.body
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}