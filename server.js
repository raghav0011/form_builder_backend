const express = require("express");
const db = require("./models");
const app = express();
const userRoutes = require("./routes/userRoutes");
const orgRoutes = require("./routes/orgRoutes");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/users", userRoutes);
app.use("/org", orgRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));