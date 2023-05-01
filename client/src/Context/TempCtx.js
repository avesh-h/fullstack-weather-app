import React, { useState, createContext } from "react";

const TempDetailsContext = createContext();

const TempDetailsProvider = ({ children }) => {
  const [tempDetails, setTempDetails] = useState({});
  const [iconUrl, setIconUrl] = useState("");
  const [isLive, setIsLive] = useState(true);
  const [showCity, setShowCity] = useState("");
  return (
    <TempDetailsContext.Provider
      value={{
        tempDetails,
        setTempDetails,
        iconUrl,
        setIconUrl,
        isLive,
        setIsLive,
        showCity,
        setShowCity,
      }}
    >
      {children}
    </TempDetailsContext.Provider>
  );
};

export { TempDetailsContext, TempDetailsProvider };
