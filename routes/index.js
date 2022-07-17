const router = require("express").Router();

const userRoutes = require("../routes/userRoutes");
const thoughtsRoutes = require("../routes/thoughtsRoutes");

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtsRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
