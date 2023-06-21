import Room from "../models/Room.js";
import  {createError } from "../utils/error.js"

export const createRoomController = async (req, res, next)=>{

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{

        const savedRoom = await newRoom.save()

        try{
            await Room.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id},
            
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err)
    }

}


export const getRoomController = async (req, res, next) => {
    try {
      const roomId = req.params.id;
      const room = await getRoomById(roomId);
      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  };
  
  
  export const getAllRoomController = async (request, response, next) => {
    try {
      const rooms = await getAllRooms();
      response.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  };
  
  
  export const updateRoomController = async (request, response, next) => {
    try {
      const { id } = request.params;
      const updatedRoom = await updateRoomById(id, request.body);
      response.status(200).json(updatedRoom);
    } catch (error) {
      next(error);
    }
  };
  
  
  
  export const deleteRoomController = async (request, response, next) => {
    try {
      const { id } = request.params;
      await deleteRoomById(id);
      response.status(200).json("Room has been deleted");
    } catch (error) {
      next(error);
    }
  };
  
