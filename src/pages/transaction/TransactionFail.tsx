import React from 'react';
import { Box, Typography } from '@mui/material';

import CustomCard from '../../components/customCard';
import Header from '../../components/header';

import { Assets } from '../../assets/images';

interface TransactionFailProps {
  isMobile: boolean;
}

const TransactionFail: React.FC<TransactionFailProps> = ({ isMobile }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: isMobile
          ? '#ea0029'
          : `url(${Assets.common.background_web}) center no-repeat`,
        backgroundSize: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CustomCard isMobile={isMobile}>
        <Header title={'Authorisation unsuccessful'} />
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#58595B',
            mt: '8px',
          }}
        >
          The transaction was cancelled.
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '400',
            color: '#58595B',
            mt: '25px',
          }}
        >
          To keep you safe, automatic logout will occur shortly.
        </Typography>
      </CustomCard>
    </Box>
  );
};

export default TransactionFail;
