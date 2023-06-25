import { createHotel,getAllHotels,getHotelById , updateHotelById, deleteHotelById} from '../services/hotelService.js';
import Hotels from "../models/Hotels.js";



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
    const { min, max, limit, ...others } = request.query;
    const hotels = await getAllHotels({ ...others, min, max, limit });
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

export const countByCity = async (req, res, next) =>{
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(city=>{
      return Hotels.countDocuments({city:city})
    }))
    res.status(200).json(list);
  }catch (err){
    next(err);
  }
}

export const countByType = async (req, res, next)=>{
 try{ 
      const hotelCount = await Hotels.countDocuments({type:"Hotel"})
      const apartmentCount = await Hotels.countDocuments({type:"apartment"})
      const resortCount = await Hotels.countDocuments({type:"resorts"})
      const villaCount = await Hotels.countDocuments({type:"villas"})
      const cabinCount = await Hotels.countDocuments({type:"cabins"})

      res.status(200).json([
        {type:"Hotel",count:hotelCount},
        {type:"apartments", count: apartmentCount},
        {type: "resorts", count: resortCount},
        {type:"villas", count: villaCount},
        {type:"cabins", count: cabinCount},
      ]);
    }catch (err){
      next(err);
    }
}