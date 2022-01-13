import express, { json, urlencoded } from "express";
const app = express();
import { config } from "dotenv";
config({ path: "./.env" });
import "./utils/db_connection.js";
const PORT = process.env.PORT;

//routes
import itemRoutes from "./routes/item.routes.js";

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(itemRoutes);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
