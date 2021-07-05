const express = require("express");
require("dotenv/config");

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 8000, () =>
  console.log("Listening at http://localhost:8000")
);
