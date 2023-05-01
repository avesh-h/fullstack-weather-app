import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { TempDetailsContext } from "../Context/TempCtx";
import { useContext } from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import {
  FaSun,
  FaCloud,
  FaCloudSun,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaBolt,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";

export default function ActionAreaCard({
  submitHandler,
  cityName,
  setCityName,
  isValid,
}) {
  const { tempDetails, isLive, iconUrl, showCity } =
    useContext(TempDetailsContext);
  let weatherIcon = tempDetails?.details?.length && tempDetails.details[0].main;

  switch (weatherIcon) {
    case "Clear":
      weatherIcon = <FaSun />;
      break;
    case "Clouds":
      weatherIcon = <FaCloud />;
      break;
    case "Rain":
      weatherIcon = <FaCloudRain />;
      break;
    case "Drizzle":
      weatherIcon = <FaCloudShowersHeavy />;
      break;
    case "Thunderstorm":
      weatherIcon = <FaBolt />;
      break;
    case "Snow":
      weatherIcon = <FaSnowflake />;
      break;
    default:
      weatherIcon = <FaSmog />;
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "15px",
        height: "500px",
        width: "70%",
        backgroundColor: "#ffffff5e",
      }}
    >
      {isLive ? (
        <CardActionArea
          sx={{ "& .MuiCardActionArea-focusHighlight": { position: "static" } }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Location : {tempDetails.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "22px", position: "relative" }}
            >
              Temperature:{" "}
              <img
                src={iconUrl}
                style={{
                  width: "60px",
                  position: "absolute",
                  left: "60%",
                  top: "-10px",
                }}
              />
              {tempDetails.temp}&deg;C
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "22px" }}
            >
              Humidity:
              <ThermostatIcon />
              {tempDetails.humidity}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "22px" }}
            >
              Weather-type: {"  "}
              {weatherIcon}
              {"  "}
              {tempDetails?.details?.length && tempDetails.details[0].main}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "22px" }}
            >
              Type:{"  "}
              {tempDetails?.details?.length &&
                tempDetails.details[0].description}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <CardActionArea
          sx={{ "& .MuiCardActionArea-focusHighlight": { position: "static" } }}
        >
          <Box sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                onChange={(e) => setCityName(e.currentTarget.value)}
                placeholder="search city"
                style={{
                  background: "transparent",
                  border: "2px solid #fff",
                  height: "30px",
                  borderRadius: "15px",
                  paddingLeft: "10px",
                }}
              />
              <button
                type="submit"
                style={{
                  marginLeft: "10px",
                  padding: "6px 20px",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>
            </form>
          </Box>
          {isValid ? (
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Location : {showCity}
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "22px", position: "relative" }}
                >
                  Temperature:{" "}
                  <img
                    src={iconUrl}
                    style={{
                      width: "60px",
                      position: "absolute",
                      left: "60%",
                      top: "-10px",
                    }}
                  />
                  {tempDetails.temp}&deg;C
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "22px" }}
                >
                  Humidity:
                  <ThermostatIcon />
                  {tempDetails.humidity}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "22px" }}
                >
                  Weather-type: {"  "}
                  {weatherIcon} {"  "}
                  {tempDetails?.details?.length && tempDetails.details[0].main}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "22px" }}
                >
                  Type:{"  "}
                  {tempDetails?.details?.length &&
                    tempDetails.details[0].description}
                </Typography>
              </Box>
            </CardContent>
          ) : (
            <p style={{ textAlign: "center", fontSize: "22px" }}>Detail Card</p>
          )}
        </CardActionArea>
      )}
    </Card>
  );
}
