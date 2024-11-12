import React from 'react';
import { Box, Typography } from '@mui/material';

import CustomCard from '../../components/customCard';
import Header from '../../components/header';
import { ProgressButton } from '../../components/button';

import { Assets } from '../../assets/images';

interface TransactionSuccessProps {
  isMobile: boolean;
}

const TransactionSuccess: React.FC<TransactionSuccessProps> = ({
  isMobile,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%',
        background: isMobile
          ? '#ea0029'
          : `url(${Assets.common.background_web}) center no-repeat`,
        backgroundColor: '#ea0029',
        backgroundSize: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CustomCard isMobile={isMobile}>
        <Header title={'Authorisation successful'} />
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#58595B',
            mt: '8px',
          }}
        >
          Thank you for paying with Boost Bank.
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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? '320px 0 10px 0' : '280px 0 10px 0',
          }}
        >
          <ProgressButton title="Return to Merchant" />
        </Box>
      </CustomCard>
    </Box>
  );
};

export default TransactionSuccess;
