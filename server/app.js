const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();
const port = 8000;
const { changeDateCars, filterCars } = require("./helper");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Halaman Server Side</h1>");
});

app.post("/api/v1/cars", async (req, res) => {
  const cars = (await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")).data;
  const newCars = await changeDateCars(cars);
  const filteredCars = await filterCars(newCars, req.body);
  res.send(filteredCars);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
