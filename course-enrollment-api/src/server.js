import express from "express";
import checkDatabaseConnection from "./utils/dbHealthCheck";
import courseRoutes from "./routes/courses";
dotenv.config();
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 4678;
app.use(cors());
app.use(express.json());

app.use("/", courseRoutes);
app.use(logger)(async () => {
  const isDbConnected = await checkDatabaseConnection();
  if (!isDbConnected) {
    console.log("Server is not started due to DB connection failure");
    process.exit();
  }
  app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
  });
})();
