const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
