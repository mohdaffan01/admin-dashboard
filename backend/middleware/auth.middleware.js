import jwt from "jsonwebtoken"
import User from "../model/user.model.js";

export const authMiddleware = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        
        // Fallback to Authorization header (useful for browsers like Chrome blocking cross-site cookies)
        if (!token && req.headers.authorization) {
            if (req.headers.authorization.startsWith("Bearer ")) {
                token = req.headers.authorization.split(" ")[1];
            } else {
                token = req.headers.authorization;
            }
        }

        if (!token) {
            return res.status(404).json({
                success: false,
                message: "token not found"
            })
        }
        const tokenData = jwt.verify(token, process.env.SECRET);

        const user = await User.findById(tokenData.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        req.user = user;
        next();

    } catch (error) {
        next(error)
    }
}