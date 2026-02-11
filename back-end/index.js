const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crudRouter = require("./App/routes/web/crudRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ ADD THIS
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// API Routes
app.use("/api/website/crud", crudRouter);

// DB Connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();
