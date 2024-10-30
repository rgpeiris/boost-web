import React from "react";
import { Box, Typography } from "@mui/material";

import { Assets } from "../assets/images";

interface ComingSoonProps {
  isMobile: boolean;
}
 
const ComingSoon: React.FC<ComingSoonProps> = ({ isMobile }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f1f3f4"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <img
          src={Assets.common.duitnow_logo}
          alt="duitnow-logo"
          style={{
            width: "64px",
            height: "64px",
          }}
        />
        <Typography align="center" variant="h2" color="#ec3067">
          WELCOME
        </Typography>
      </Box>
      <Typography align="center" variant="h6">
        {isMobile ? "DuitNow OBW (Debiting Agent) MOBILE" : "DuitNow OBW (Debiting Agent) WEB"} 
      </Typography>
    </Box>
  );
};
 
export default ComingSoon;