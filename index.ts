import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { connectWithDB } from "./src/models";
import { errorMiddleware } from "./src/middleware/error.middleware";
import { router } from "./src/routes/index.router";
import { deleteExpiredOtps } from "./src/services/cron.service";
import expressLayouts from "express-ejs-layouts";
import path from "path";

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layouts/main"); // default layout

app.use('/api', router)

app.use(errorMiddleware);

app.listen(PORT, () => {
  connectWithDB(() => {
    console.log('DB connected');

    // CRONS
    deleteExpiredOtps()
  })
  console.log(`Server running at http://localhost:${PORT} mode`);
});

