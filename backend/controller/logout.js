export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt-admin-sentimeter", {
            path: '/', 
            httpOnly: true, 
            sameSite: "Strict", 
            secure: process.env.NODE_ENV === 'production' 
        });
        res.status(200).json({message : "log out successfully !"})
    } catch (error) {
        res.status(400).json({message : "try again !"})
    }
};