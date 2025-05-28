import { Router } from "express";
import { getAllItems, createNewItem } from "../controllers/itemsController";
import { validateItem } from "../middlewares/validateItem";

const itemsRouter = Router();

itemsRouter.get("/", getAllItems);
itemsRouter.post("/", validateItem, createNewItem);

export default itemsRouter;
