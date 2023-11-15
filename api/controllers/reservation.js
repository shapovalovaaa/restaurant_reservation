import Reservation from "../models/Reservation.js";

export const createReservation = async (req, res, next) => {
    const newReservation = new Reservation(req.body)
    try {
        const savedReserve = await newReservation.save()
        res.status(200).json(savedReserve)

    } catch (err) {
        next(err);
    }
};

export const updateReservation = async (req, res, next) => {
    try {
        const updatedReserve = await Reservation.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedReserve)

    } catch (err) {
        next(err);
    }
};

export const deleteReservation = async (req, res, next) => {
    try {
        await Reservation.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Reservation has been deleted.");

    } catch (err) {
        next(err);
    }
};

export const getReservation = async (req, res, next) => {
    try {
        const reserve = await Reservation.findById(
            req.params.id
        );
        res.status(200).json(reserve)

    } catch (err) {
        next(err);
    }
};

export const getReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.find().limit(req.query.limit);
        res.status(200).json(reservations);
    } catch (err) {
        next(err);
    };
};