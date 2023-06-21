import { createUser,getAllUsers,getUserById , updateUserById, deleteUserById} from '../services/userService.js';

export const createUserController = async (req, res, next) => {
  try {
    const newUser = await createUser(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const getUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUserController = async (request, response, next) => {
  try {
    const users = await getAllUsers();
    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (request, response, next) => {
  try {
    const { id } = request.params;
    const updatedUser = await updateUserById(id, request.body);
    response.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (request, response, next) => {
  try {
    const { id } = request.params;
    await deleteUserById(id);
    response.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
