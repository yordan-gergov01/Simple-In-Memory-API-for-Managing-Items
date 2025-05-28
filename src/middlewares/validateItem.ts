import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";

export const validateItem = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return next(
      new AppError("Invalid item name. It must be a non-empty string.", 400)
    );
  }

  next();
};
