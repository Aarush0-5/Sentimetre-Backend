import express from "express"
import {signup} from "../controller/signup.js"

const router = express.Router();

router.post("/auth/signup", signup);

export default router;
