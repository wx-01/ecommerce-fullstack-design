import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});