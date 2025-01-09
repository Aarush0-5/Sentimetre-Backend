import express from "express"
import {login} from "../controller/login.js"

const router = express.Router();

router.post("/auth/login", login);

export default router;