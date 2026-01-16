import "dotenv/config";
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import session from 'express-session'
import flash from 'connect-flash';
import path from "path";

import { connectWithDB } from "./models";
import { router } from "./routes/index.router";
import { errorMiddleware } from "./middleware/error.middleware";
import { deleteExpiredOtps } from "./services/cron.service";
import { adminRouter } from "./routes/admin.router";

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', "public")));

app.use(cookieParser());
app.use(session({
  secret: 'flash',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 60000
  }
}));
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '..', "views"));

app.use('/api', router)
app.use('/admin', adminRouter)

app.use(errorMiddleware);

app.listen(PORT, () => {
  connectWithDB(() => {
    console.log('DB connected');

    // CRONS
    deleteExpiredOtps()
  })
  console.log(`Server running at http://localhost:${PORT} mode`);
});

