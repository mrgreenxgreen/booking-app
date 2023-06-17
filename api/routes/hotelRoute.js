import express from "express"
import { getAllHotelController  ,createHotelController, getHotelController,updateHotelController,deleteHotelController } from "../controllers/hotelController.js";

//, getHotelController, getAllHotelController, updateHotelController, deleteHotelController
const router = express.Router();

//CREATE
router.post('/',createHotelController)
//UPDATE
router.put('/:id',updateHotelController);
// //DELETE
router.delete('/:id',deleteHotelController);
// //GET
router.get('/:id', getHotelController);
// //GET ALL
router.get('/',getAllHotelController);

export default router;