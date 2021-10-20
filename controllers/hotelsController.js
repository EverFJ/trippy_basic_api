const hotels = ["Hilton", "Ritz", "Trianon Palace"]

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
            message: "Hotel created",
            name: req.body.name
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
            hotels: hotels
        })
    } else {
        res.status(500).json({
            message: "You have to provide a name for the hotel you wanna update"
        })
    }
}

const deleteHotel = (req, res) => {
    const index = req.params.id - 1
    if (index < hotels.length - 1) {
        const deletedHotel = hotels.splice(index, 1)
        hotels.splice(index, 1)
        res.status(200).json({
            message: "Hotel deleted",
            name: deletedHotel
        })
    }
    res.status(500).json({
        message: "The hotel id you provided doesn't exist"
    })
}

module.exports = {
    getHotels,
    getOneHotel,
    createHotel,
    updateHotel,
    deleteHotel
}