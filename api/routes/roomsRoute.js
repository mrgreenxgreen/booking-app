import express from "express"
import { createRoomController, deleteRoomController, getAllRoomController, getRoomController, updateRoomController } 
    from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//, getRoomController, getAllRoomController, updateRoomController, deleteRoomController
const router = express.Router();

//CREATE
router.post('/:hotelid',verifyAdmin, createRoomController)
//UPDATE
router.put('/:id',verifyAdmin, updateRoomController);
// //DELETE
router.delete('/:id',verifyAdmin , deleteRoomController);
// //GET
router.get('/:id', getRoomController);
// //GET ALL
router.get('/',getAllRoomController);

export default router;