import React, { useState } from "react";
import DetailCard from "./DetailCard";
import { TempDetailsContext } from "../Context/TempCtx";
import { useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [cityName, setCityName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { setTempDetails, setIconUrl, setShowCity } =
    useContext(TempDetailsContext);
  const submitHandler = (e) => {
    e.preventDefault();
    let icon_url;
    setShowCity(cityName);
    if (cityName.length) {
      axios
        .post("http://localhost:3001/city", { city: cityName })
        .then((resp) => {
          if (resp.status === 200) {
            setIsValid(true);
            setTempDetails(resp.data);
            const icon = resp.data.details[0].icon;
            icon_url = `http://openweathermap.org/img/w/${icon}.png`;
            setIconUrl(icon_url);
          }
        })
        .catch((err) => {
          setIsValid(false);
          toast.error(err.response.data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
  };
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <DetailCard
        submitHandler={submitHandler}
        cityName={cityName}
        setCityName={setCityName}
        isValid={isValid}
      />
      <ToastContainer />
    </div>
  );
};

export default Form;
