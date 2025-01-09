import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./backend/config/db.js";
import errorHandler from "./backend/middleware/errorHandler.js";
import corsMiddleware from "./backend/middleware/corsMiddleware.js";
import limiter from "./backend/middleware/rateLimiter.js";
import logger from "./backend/middleware/logger.js";
import loginRoutes from "./backend/routes/loginRoutes.js";
import logoutRoutes from "./backend/routes/logoutRoutes.js";
import signupRoutes from "./backend/routes/signupRoutes.js";
import podcastcrudRoutes from "./backend/routes/podcastcrudRoutes.js";
import cookieParser from "cookie-parser";



dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())

app.use(corsMiddleware);

app.use(limiter);


if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}

//Podcast CRUD
app.use(podcastcrudRoutes);

//Authentication
app.use(signupRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);

app.use(errorHandler);

app.listen(port, () => {
    connectDB();
    console.log("server started");
})

