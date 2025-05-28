import http from "http";
import dotenv from "dotenv";
import app from "./app";

// triggered when an exception occurs in synchronous code and is not handled by try...catch
process.on("uncaughtException", (err: Error) => {
  console.error("Uncaught Exception!");
  console.error(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: "././config.env" });

const PORT = process.env.APP_PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port...${PORT}`);
});

// triggered when there is a raw Promise rejection
process.on("unhandledRejection", (err: any) => {
  console.error("Unhandled Rejection!");
  console.error(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
