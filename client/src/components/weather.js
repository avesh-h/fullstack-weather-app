import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailCard from "./DetailCard";

const Weather = ({ tempDetails }) => {
  //   const [currTemp, setCurrTemp] = useState({});

  //   useEffect(() => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { longitude, latitude } = position.coords;
  //       if (longitude && latitude) {
  //         axios
  //           .post("http://localhost:3001/", { longitude, latitude })
  //           .then((response) => {
  //             if (response.status === 200) {
  //                 setCurrTemp(response.data)

  //             }
  //           });
  //       }
  //     });
  //   }, []);
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <DetailCard />
    </div>
  );
};

export default Weather;
