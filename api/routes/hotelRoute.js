import express from "express"
import { getAllHotelController  ,
    createHotelController, 
    getHotelController,
    updateHotelController,
    deleteHotelController,
    countByCity,
countByType } 
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
router.get('/find/:id', getHotelController);

router.get('/countByCity', countByCity);
router.get('/countByType', countByType);



export default router;