import Hotels from "../models/Hotels.js";

//CREATE


export const createHotel = async (hotelData) => {
  const newHotel = new Hotels(hotelData);
  try {
    const savedHotel = await newHotel.save();
    return savedHotel;
  } catch (error) {
    throw error;
  }
};


//GET ID
export const getHotelById = async (hotelId) => {
    try {
      const hotel = await Hotels.findById(hotelId);
      return hotel;
    } catch (error) {
      throw error;
    }
  };

//GET ALL


export const getAllHotels = async () => {
  try {
    const hotels = await Hotels.find();
    return hotels;
  } catch (error) {
    throw error;
  }
};
//UPDATE
//no next in original


export const updateHotelById = async (id, data) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(id, data, { new: true });
    return updatedHotel;
  } catch (error) {
    throw error;
  }
};

//DELETE

export const deleteHotelById = async (id) => {
  try {
    await Hotels.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
