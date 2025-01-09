import express from "express"
import {logout} from "../controller/logout.js"

const router = express.Router();

router.post("/auth/logout", logout);

export default router;