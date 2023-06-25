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

export const getAllHotels = async (params) => {
  try {
    const { min, max, limit, ...others } = params;
    const query = { ...others };

    if (min || max) {
      query.$expr = {
        $and: []
      };

      if (min) {
        query.$expr.$and.push({ $gt: ["$cheapestPrice", min] });
      }

      if (max) {
        query.$expr.$and.push({ $lt: ["$cheapestPrice", max] });
      }
    }

    const hotels = await Hotels.find(query).limit(limit);
    return hotels;
  } catch (error) {
    throw error;
  }
};



// export const getAllHotels = async (query) => {
//   try {

//     const hotels = await Hotels.find(query.query,cheapestPrice:{ $gt:min | 1, $lt:max|| 999}).limit(query.limit);
//     return hotels;
//   } catch (error) {
//     throw error;
//   }
// };
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
