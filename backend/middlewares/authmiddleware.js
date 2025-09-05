import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config();

export const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error in middleware", error);
    res.status(401).json({ message: "Token is not valid" });
  }
};


export const admin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied, admin access required' });
    }
    next();
  };
