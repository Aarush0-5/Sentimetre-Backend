import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-admin-sentimeter"]
        if (!token) {
            return res.status(401).json({message: "Log in please!"});
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        if (!decoded) {
            return res.status(401).json({message : "cookie could not be decoded"})
        }

        const user= await Admin.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({message: "no user found"});
        }

        next();
    }
        catch (error) {
            console.log(error);
            return res.status(500).json({message: "This is the error !"});
        }
}