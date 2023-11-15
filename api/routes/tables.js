import express from "express";
import { createTable, deleteTable, getTable, getTables, updateTable, updateTableAvailability } from "../controllers/table.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:restaurantid",
    //verifyAdmin, 
    createTable);

//update
router.put("/:id", verifyAdmin, updateTable);
router.put("/availability/:id", updateTableAvailability);
//delete
router.delete("/:id", verifyAdmin, deleteTable);
//get
router.get("/:id", getTable);
//get all
router.get("/", getTables);

export default router