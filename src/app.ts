import express, { Application, NextFunction, Response } from "express";
import { connectRedisClient } from "./config/db";

const app: Application = express();

const initializeDB = () => {
  connectRedisClient()
    .then(() => console.log("connected to db successfully"))
    .catch((err) => console.error(err));
};

initializeDB();

export default app;
