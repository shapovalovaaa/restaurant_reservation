import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
    },
    restaurantId: {
        type: String,
    },
    tableId: {
        type: String,
    },
});

export default mongoose.model("Reservation", ReservationSchema)