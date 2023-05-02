const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");
const dotenv = require("dotenv");

app.use(express.json());

app.use(cors());

app.use("/", router);

dotenv.config();

app.listen(process.env.PORT || 3001, () => {
  console.log("server is on");
});

//get weather data for current location
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// get weather data for city name
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
