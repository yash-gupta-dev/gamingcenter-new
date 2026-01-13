import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { connectWithDB } from "./src/models";
import { errorMiddleware } from "./src/middleware/error.middleware";
import { router } from "./src/routes/index.router";
import { deleteExpiredOtps } from "./src/services/cron.service";

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

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

