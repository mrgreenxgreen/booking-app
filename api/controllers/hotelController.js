import { createHotel,getAllHotels,getHotelById , updateHotelById, deleteHotelById} from '../services/hotelService.js';


export const createHotelController = async (req, res, next) => {
  try {
    const newHotel = await createHotel(req.body);
    res.status(200).json(newHotel);
  } catch (error) {
    next(error);
  }
};


export const getHotelController = async (req, res, next) => {
  try {
    const hotelId = req.params.id;
    const hotel = await getHotelById(hotelId);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};


export const getAllHotelController = async (request, response, next) => {
  try {
    const hotels = await getAllHotels();
    response.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};


export const updateHotelController = async (request, response, next) => {
  try {
    const { id } = request.params;
    const updatedHotel = await updateHotelById(id, request.body);
    response.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};



export const deleteHotelController = async (request, response, next) => {
  try {
    const { id } = request.params;
    await deleteHotelById(id);
    response.status(200).json("Hotel has been deleted");
  } catch (error) {
    next(error);
  }
};
