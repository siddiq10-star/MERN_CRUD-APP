const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crudRouter = require("./App/routes/web/crudRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

//Routes

app.use("/api/website/crud", crudRouter);

// Connection to Db
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(
        "🚀 Server is running on http://localhost:" + process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
