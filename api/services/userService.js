import User from "../models/User.js";

//CREATE


export const createUser = async (hotelData) => {
  const newUser = new User(hotelData);
  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};


//GET ID
export const getUserById = async (hotelId) => {
    try {
      const hotel = await User.findById(hotelId);
      return hotel;
    } catch (error) {
      throw error;
    }
  };

//GET ALL


export const getAllUsers = async () => {
  try {
    const hotels = await User.find();
    return hotels;
  } catch (error) {
    throw error;
  }
};
//UPDATE
//no next in original


export const updateUserById = async (id, data) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

//DELETE

export const deleteUserById = async (id) => {
  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
