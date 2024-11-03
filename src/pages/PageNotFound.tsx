import React from 'react';
import { Box, Typography } from '@mui/material';

const PageNotFound: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f3f4',
      }}
    >
      <Typography align="center" variant="h1" color="#ec3067">
        404
      </Typography>
      <Typography align="center" variant="h5">
        Page Not Found
      </Typography>
    </Box>
  );
};

export default PageNotFound;
