import React from "react";
import { Box, Typography } from "@mui/material";
 
const Transaction: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography align="center" variant="h5">
        Transaction
      </Typography>
    </Box>
  );
};
 
export default Transaction;