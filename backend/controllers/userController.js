import User from "../models/userModel.js";

//profile
export const profile = async(req,res)=>{
    
   const { id } = req.params;

  try {
    const user = await User.findById(id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
