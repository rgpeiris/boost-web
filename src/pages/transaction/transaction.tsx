import React from 'react';
import { Box } from '@mui/material';

import CustomCard from '../../components/customCard';
import Header from '../../components/header';

import { Assets } from '../../assets/images';

interface TransactionProps {
  isMobile: boolean;
}

const Transaction: React.FC<TransactionProps> = ({ isMobile }) => {
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
        <Header
          isMobile={isMobile}
          title={'Authorise this transaction on Boost Bank App'}
        />
      </CustomCard>
    </Box>
  );
};

export default Transaction;
