let hotels = ["Hilton", "Ritz", "Trianon Palace"]

const getHotels = (req, res) => {
    res.json(hotels)
}
const getOneHotel = (req, res) => {
    res.json(hotels[req.params.id - 1])
}
const createHotel = (req, res) => {
    if (req.body.name) {
        hotels.push(req.body.name)
        res.status(200).json({
            message: "Hotel created"
        })
    } else {
        res.status(500).json({
            message: "You have to provide a name for the hotel you wanna create"
        })
    }
}
const updateHotel = (req, res) => {
    if (req.query.name) {
        hotels[req.params.id - 1] = req.query.name
        res.status(200).json({
            message: "Hotel updated",
            // hotels
        })
    } else {
        res.status(500).json({
            message: "You have to provide a name for the hotel you wanna update"
        })
    }
}

const deleteHotel = (req, res) => {

}

module.exports = {
    getHotels,
    getOneHotel,
    createHotel,
    updateHotel,
    deleteHotel
}