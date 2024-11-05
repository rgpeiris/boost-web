import React from 'react';
import { Grid } from '@mui/material';

import { Assets } from '../../assets/images';

interface WrapperProps {
  isMobile: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ isMobile }) => {
  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <img
        src={Assets.common.boost_bank_logo}
        alt="boost-bank-logo"
        style={{
          width: isMobile ? '120px' : '120px',
          height: isMobile ? '25px' : '25px',
        }}
      />
      <img
        src={Assets.common.duitnow_logo}
        alt="duitnow-logo"
        style={{
          width: isMobile ? '40px' : '40px',
          height: isMobile ? '40px' : '40px',
        }}
      />
    </Grid>
  );
};

export default Wrapper;
