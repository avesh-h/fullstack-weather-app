import Weather from "./components/weather";
import Form from "./components/Form";
import MenuTab from "./components/MenuTab";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TempDetailsContext } from "./Context/TempCtx";

function App() {
  const {
    tempDetails,
    setTempDetails,
    iconUrl,
    setIconUrl,
    isLive,
    setShowCity,
  } = useContext(TempDetailsContext);
  useEffect(() => {
    if (isLive) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        if (longitude && latitude) {
          setShowCity("");
          let icon_url;
          axios
            .post(`${process.env.REACT_APP_MY_URL}/`, { longitude, latitude })
            .then((response) => {
              if (response.status === 200) {
                setTempDetails(response.data);
                const icon = response.data.details[0].icon;
                icon_url = `http://openweathermap.org/img/w/${icon}.png`;
                setIconUrl(icon_url);
              }
            });
        }
      });
    } else {
      setTempDetails({});
      setIconUrl("");
    }
  }, [isLive]);

  return (
    <div className="App">
      <MenuTab />
      {isLive ? <Weather tempDetails={tempDetails} /> : <Form />}
    </div>
  );
}

export default App;
