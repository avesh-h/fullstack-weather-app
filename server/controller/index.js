const https = require("https");

const cityTemp = (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=f268d682c0236a1498702f80558fcb31&units=metric`;
  https.get(url, (response) => {
    console.log(response);
    if (response.statusCode === 200) {
      response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        const requiredData = {
          details: weatherData.weather,
          temp: Math.round(weatherData.main.temp),
          humidity: weatherData.main.humidity,
        };
        res.send(JSON.stringify(requiredData));
      });
    } else {
      res.status(404).json(response.statusMessage);
    }
  });
};

const currTemp = (req, res) => {
  const lat = req.body.latitude;
  const lon = req.body.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f268d682c0236a1498702f80558fcb31&units=metric`;
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        const requiredData = {
          details: weatherData.weather,
          temp: Math.round(weatherData.main.temp),
          name: weatherData.name,
          humidity: weatherData.main.humidity,
        };
        res.send(JSON.stringify(requiredData));
      });
    } else {
      res.send("something went wrong!");
    }
  });
};

module.exports = { cityTemp, currTemp };
