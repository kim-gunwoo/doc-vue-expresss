const express = require("express");
const router = express.Router();
const health = require("../api/health");

router.get(
  "/",
  (req, res, next) => {
    next();
  },
  health.run
);

module.exports = router;
