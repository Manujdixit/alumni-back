const express = require("express");
const dbconnect = require("./config/db.connect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const alumniRoute = require("./routes/alumni.route");
const blogRoute = require("./routes/blog.route");
const authRoute = require("./routes/auth.route");

dbconnect();

// app.use("/", (req, res) => {
//   res.send("Hello from d=server side");
// });

app.use(express.json());
app.use("/api/alumni", alumniRoute);
app.use("/api/blog", blogRoute);
app.use("/api/user", authRoute);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
