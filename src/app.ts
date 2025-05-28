import express from "express";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import rateLimit from "express-rate-limit";

import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/errorController";

const app = express();

// security HTTP headers
app.use(helmet());

// body parser - reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// data sanitization against XSS
app.use(xss());

// prevent HTTP parameter pollution
app.use(hpp());

// enable CORS, here we could pass the URL
app.use(cors());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

// global error handler
app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

export default app;
