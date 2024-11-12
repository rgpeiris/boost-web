import React, { useState, useEffect } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface ProgressButtonProps {
  title: string;
  duration?: number; // Duration in seconds for the countdown
}

const ProgressButton: React.FC<ProgressButtonProps> = ({
  title,
  duration = 5,
}) => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Update progress and countdown every 100ms
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 100 / (duration * 10), 100));
      setTimeLeft(prev => Math.max(prev - 0.1, 0));
    }, 100);

    // Clear interval when countdown reaches 0
    if (timeLeft <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeLeft, duration]);

  return (
    <Box position="relative" display="flex" width="100%">
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '48px',
          width: '100%',
          borderRadius: '24px',
          backgroundColor: '#F8A6B4',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#EA0029',
          },
        }}
      />
      <Typography
        variant="button"
        display="block"
        align="center"
        sx={{
          color: '#FFFFFF',
          width: '100%',
          height: '48px',
          fontSize: '14px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 1,
          textTransform: 'none',
        }}
      >
        {title} ({Math.ceil(timeLeft)}s)
      </Typography>
    </Box>
  );
};

export default ProgressButton;
