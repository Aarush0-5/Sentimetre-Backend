import bcryptjs from "bcryptjs";
import Admin from "../models/admin.js";
import tokengen from "../utility/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        
        if (!username || !password) {
            return res.status(400).json({ message: "All fields required." });
        }

        
        const existingUsername = await Admin.findOne({ username: username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists." });
            
        }

        
        if (password.length < 8) {
            return res.status(400).json({ message: "Password should not be less than 8 characters!" });
        }

       
        const salt = await bcryptjs.genSalt(10);
        const hashedPwd = await bcryptjs.hash(password, salt);

        
        const newAdmin = new Admin({
            username: username,
            password: hashedPwd
        });

        
        await newAdmin.save();

        
        tokengen(newAdmin._id, res);  

        return res.status(201).json({
            message: "Admin created successfully :)",
            Admin: { username: newAdmin.username } 
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error, try again!" });
    }
};
