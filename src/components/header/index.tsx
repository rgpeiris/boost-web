import React from 'react';
import { Typography } from '@mui/material';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: '20px',
        color: '#231F20',
        fontWeight: '800',
      }}
    >
      {title}
    </Typography>
  );
};

export default Header;
