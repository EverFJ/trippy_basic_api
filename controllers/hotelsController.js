const hotels = ["Hilton", "Ritz", "Trianon Palace"]

const getHotels = (req, res) => {
    res.json(hotels)
}

const getOneHotel = (req, res) => {
    res.json(hotels[req.params.id - 1])
}
const createHotel = (req, res) => {
    if (req.body) {
        hotels.push(req.body)
        res.json({
            message: "Hotel created"
        })
    } else {
        res.status(500).json({
            error
        })
    }
}
const updateHotel = (req, res) => {

}

module.exports = {
    getHotels,
    getOneHotel,
    createHotel,
    updateHotel
}