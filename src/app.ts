import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/errorController";
import itemsRouter from "./routes/itemsRouter";

const app = express();

// security HTTP headers
app.use(helmet());

// body parser - reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// enable CORS, here we could pass the URL
app.use(cors());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

app.use("/api/v1/items", itemsRouter);

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

// global error handler
app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

export default app;
