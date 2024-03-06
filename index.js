const express = require("express");
const dbconnect = require("./config/db.connect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRoute = require("./routes/auth.route");
const blogRoute = require("./routes/blog.route");

dbconnect();

// app.use("/", (req, res) => {
//   res.send("Hello from d=server side");
// });

app.use(express.json());
app.use("/api/alumni", authRoute);
app.use("/api/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
