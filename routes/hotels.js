const express = require("express")
const router = express.Router()
const hotelsController = require("../controllers/hotelsController")

router.get("/", hotelsController.getHotels)
router.get("/:id", hotelsController.getOneHotel)
router.post("/", hotelsController.createHotel)
router.put("/:id", hotelsController.updateHotel)
router.delete("/:id", hotelsController.deleteHotel)

module.exports = router