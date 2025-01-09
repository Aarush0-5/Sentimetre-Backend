import express from "express";
import { podcastget, podcastdelete, podcastpost, podcastput } from "../controller/podcastcrud.js";
import {protectedRoute} from "../middleware/protectedRoute.js";
const router = express.Router();

router.get("/auth/podcast", podcastget);
router.post("/auth/podcast",protectedRoute,  podcastpost);
router.put("/auth/podcast/:id",protectedRoute, podcastput);
router.delete("/auth/podcast/:id",protectedRoute, podcastdelete);

export default router; 