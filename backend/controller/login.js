import Admin from "../models/admin.js";
import bcryptjs from "bcryptjs";
import tokengen from "../utility/generateToken.js"

export const login= async (req, res) => {
    try {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({message : "All fields required"}) }

    const admin = await Admin.findOne({username: username})
    if (!admin) {
       return  res.status(404).json({message : ` No user with the username : ${username} exists`});
    }
    const passwordCorrect = await bcryptjs.compare(password, admin.password)
    if (!passwordCorrect) {
        return res.status(400).json({message: "Incorrect password"})
    }
    tokengen(admin._id, res);
    res.status(200).json({message : "Authentication successfull", username : admin.username})
    } catch (error) {
    res.status(500).json({message : "Internal server error , Try again"})
    }  
    //Incorrect password -> error
};