import User from "../models/userModel.js";

//get all user
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({role:'user'}).select('-password'); // get all users, remove passwords
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

//delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Deletion failed' });
  }
};

