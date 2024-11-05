import React from 'react';
import { Typography } from '@mui/material';

interface HeaderProps {
  isMobile: boolean;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ isMobile, title }) => {
  return (
    <Typography
      sx={{
        fontSize: isMobile ? '20px' : '24px',
        color: '#000000',
        fontWeight: 'bold',
      }}
    >
      {title}
    </Typography>
  );
};

export default Header;
