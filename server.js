const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users")
const thoughtsRoutes = require("./routes/thoughts")

app.use("/users", userRoutes)
app.use("/thoughts", thoughtsRoutes);

app.listen(port, () => {
  console.log(`🌍 Listening on port ${port}`);
});
