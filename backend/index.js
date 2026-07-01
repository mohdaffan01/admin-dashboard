import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import orderRouter from "./routes/order.route.js";
import { autoDeliver } from "./job/autoDeliver.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.middleware.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://admin-dashboard-hoxmbn5r0-mohdaffan01s-projects.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);

    const envOrigins = process.env.FRONTEND_URL 
      ? process.env.FRONTEND_URL.split(",").map(url => url.trim().replace(/\/$/, "")) 
      : [];

    const allAllowed = [...allowedOrigins, ...envOrigins];

    // Check exact match, or wildcard matches for localhost, or Vercel preview domains
    const isAllowed = allAllowed.includes(origin) ||
                      /^http:\/\/localhost:\d+$/.test(origin) ||
                      /^http:\/\/127\.0\.0\.1:\d+$/.test(origin) ||
                      (origin.includes("admin-dashboard") && origin.endsWith(".vercel.app"));

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(cookieParser());

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

app.use(errorMiddleware);


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    autoDeliver()//automatic process -> delivered after 1 minute
    app.listen(process.env.PORT, () => {
      console.log("Server listening on PORT:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });
