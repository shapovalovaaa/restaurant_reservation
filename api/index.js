import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import restaurantRoute from "./routes/restaurants.js"
import tableRoute from "./routes/tables.js"
import reservationRoute from "./routes/reservation.js"
import cookieParser from "cookie-parser";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:5173'
        , 'http://localhost:3000',
    ],
    credentials:true,            
    optionSuccessStatus:200
}


const app = express()
dotenv.config()

app.use(cors(corsOptions));

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/restaurants", restaurantRoute);
app.use("/api/tables", tableRoute);
app.use("/api/reservation", reservationRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    console.log(res)
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})

export default app;