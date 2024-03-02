import Restaurant from "../models/Restaurant.js";
import Table from "../models/Table.js";

export const createRestaurant = async (req, res, next) => {
    const newRestaurant = new Restaurant(req.body)

    try {
        const savedRest = await newRestaurant.save()
        res.status(200).json(savedRest)

    } catch (err) {
        next(err);
    }
};

export const updateRestaurant = async (req, res, next) => {
    try {
        const updatedRest = await Restaurant.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRest)

    } catch (err) {
        next(err);
    }
};

export const deleteRestaurant = async (req, res, next) => {
    try {
        await Restaurant.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Restaurant has been deleted.");

    } catch (err) {
        next(err);
    }
};

export const getRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findById(
            req.params.id
        );
        res.status(200).json(restaurant)

    } catch (err) {
        next(err);
    }
};

export const getRestCity = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find({ city: req.query.city }).limit(req.query.limit);
        res.status(200).json(restaurants);
    } catch (err) {
        next(err);
    };
};

export const getRestType = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find({ type: req.query.type });
        res.status(200).json(restaurants);
    } catch (err) {
        next(err);
    };
};

export const getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find().limit(req.query.limit);
        res.status(200).json(restaurants);
    } catch (err) {
        next(err);
    };
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Restaurant.countDocuments({city:city})
        }))
        res.status(200).json(list)

    } catch (err) {
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
        const restaurantCount = await Restaurant.countDocuments({ type: "restaurant" });
        const cafesCount = await Restaurant.countDocuments({ type: "cafe" });
        const barsCount = await Restaurant.countDocuments({ type: "bar" });
        const pizzeriasCount = await Restaurant.countDocuments({ type: "pizzeria" });
        const burgerCount = await Restaurant.countDocuments({ type: "burger-point" });

        res.status(200).json([
            { type: "restaurant", count: restaurantCount },
            { type: "cafe", count: cafesCount },
            { type: "bar", count: barsCount },
            { type: "pizzeria", count: pizzeriasCount },
            { type: "burger-point", count: burgerCount },
        ]);
    } catch (err) {
        next(err);
    }
};

export const getRestaurantTables = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        const list = await Promise.all(restaurant.tables.map((table) => {
            return Table.findById(table);
        })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};