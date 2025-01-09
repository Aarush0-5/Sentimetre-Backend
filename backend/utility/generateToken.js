import jwt from "jsonwebtoken";
const tokengen = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, { expiresIn: "15d" })
    res.cookie("jwt-admin-sentimeter", token , {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httponly: true,
        samesite: "strict",
        path: "/",
    });
    return token;
}
export default tokengen;