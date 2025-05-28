import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";

const globalErrorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  res.status(statusCode).json({
    status,
    message: err.message,
  });
};

export default globalErrorHandler;
