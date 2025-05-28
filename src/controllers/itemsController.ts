import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/itemModel";
import AppError from "../utils/appError";

// in-memory data storage
const items: Item[] = [];

export const getAllItems = (req: Request, res: Response): void => {
  res.status(200).json({
    status: "success",
    data: {
      items,
    },
  });
};

export const createNewItem = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name } = req.body;

  if (!name || typeof name !== "string") {
    return new AppError("Name is required and must be a string.", 400);
  }

  const newItem: Item = {
    id: uuidv4(),
    name,
  };

  items.push(newItem);

  res.status(201).json({
    status: "success",
    data: {
      newItem,
    },
  });
};
