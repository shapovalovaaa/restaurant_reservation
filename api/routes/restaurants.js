import express from "express";
import { countByCity, countByType, createRestaurant, deleteRestaurant, getRestCity, getRestaurant, getRestaurantTables, getRestaurants, updateRestaurant } 
from "../controllers/restaurant.js";

import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//create
router.post("/",
//    verifyAdmin,
    createRestaurant);

//update
router.put("/:id", verifyAdmin, updateRestaurant);
//delete
router.delete("/:id", verifyAdmin, deleteRestaurant);
//get
router.get("/find/:id", getRestaurant);
//get all
router.get("/", getRestaurants);

router.get("/get", getRestCity);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/table/:id", getRestaurantTables);

export default router;