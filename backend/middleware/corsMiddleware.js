
import cors from "cors";

const corsOptions = {
    origin: " https://sentimetre-n2m2.onrender.com", // Allow all origins. Change this to specific domains if needed.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials:true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
