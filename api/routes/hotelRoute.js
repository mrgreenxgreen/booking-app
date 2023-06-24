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

// //GET ALL
router.get('/',getAllHotelController);

// //GET
router.get('/:id', getHotelController);


export default router;