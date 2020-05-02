const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
const routers = require("./src/interfaces/http/routers");
const mongooseConnection = require("./src/infra/database/mongoose");

mongooseConnection();

app.use("/app/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers());

app.get("/health-check", (req, res) => {
  res.send("API OK");
});

app.listen(port, () => console.log(`Listening at port ${port}...`));
