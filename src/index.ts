/**
 * Externe Module
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";

dotenv.config();
/**
 * App Variablen
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
/**
 *  App Konfiguration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
/**
 * Server Aktivierung
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
