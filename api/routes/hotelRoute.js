import express from "express"
import { getAllHotelController  ,
    createHotelController, 
    getHotelController,
    updateHotelController,
    deleteHotelController } 
    from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//, getHotelController, getAllHotelController, updateHotelController, deleteHotelController
const router = express.Router();

//CREATE
router.post('/',verifyAdmin, createHotelController)
//UPDATE
router.put('/:id',verifyAdmin, updateHotelController);
// //DELETE
router.delete('/:id',verifyAdmin , deleteHotelController);
// //GET
router.get('/:id', getHotelController);
// //GET ALL
router.get('/',getAllHotelController);

export default router;