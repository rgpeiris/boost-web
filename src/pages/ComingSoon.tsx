import React from "react";
import { Box, Typography } from "@mui/material";
 
const ComingSoon: React.FC = () => {
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
      <Typography align="center" variant="h2" color="#ea0029">
        WELCOME
      </Typography>
      <Typography align="center" variant="h5">
        DuitNow OBW (Debiting Agent) 
      </Typography>
    </Box>
  );
};
 
export default ComingSoon;