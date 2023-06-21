import express from "express"
import { getAllUserController  ,
    createUserController, 
    getUserController,
    updateUserController,
    deleteUserController } 
    from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

//, getUserController, getAllUserController, updateUserController, deleteUserController
const router = express.Router();

//authentication
// router.get('/checkauthentication', verifyToken, (req,res, next)=>{
//      res.send('hello user, you are logged in')
// })

// router.get('/checkuser/:id', verifyUser,(req, res, next)=>{
//     res.send('hello user, you are logged in and you can delete')
// })

// router.get('/checkadmin/:id', verifyAdmin,(req, res, next)=>{
//     res.send('hello user, you are logged in and you can delete')
// })


//CREATE
// router.post('/',createUserController)
//UPDATE
router.put('/:id',verifyUser, updateUserController);
// //DELETE
router.delete('/:id', verifyUser, deleteUserController);
// //GET
router.get('/:id',verifyUser, getUserController);
// //GET ALL
router.get('/',verifyAdmin, getAllUserController);

export default router;