import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TempDetailsContext } from "../Context/TempCtx";
import { useContext } from "react";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const { setIsLive, isLive } = useContext(TempDetailsContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsLive(!isLive);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Live" />
        <Tab label="City" />
      </Tabs>
    </Box>
  );
}
