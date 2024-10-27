import React from "react";
import { Box, Typography } from "@mui/material";
 
interface TransactionProps {
  isMobile: boolean;
}
 
const Transaction: React.FC<TransactionProps> = ({ isMobile }) => {
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
        {isMobile ? "TRANSACTION MOBILE PAGE" : "TRANSACTION WEB PAGE" }
      </Typography>
    </Box>
  );
};
 
export default Transaction;