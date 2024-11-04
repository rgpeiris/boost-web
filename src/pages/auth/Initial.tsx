import React from 'react';
import { Box } from '@mui/material';

import Loading from '../../components/loading';

const Initial: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f3f4',
      }}
    >
      <Loading />
    </Box>
  );
};

export default Initial;
