import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';

import Header from '../../components/header';
import CustomCard from '../../components/customCard';
import CountdownTimer from '../../components/countdownTimer';
import { TextButton } from '../../components/button';

import { Assets } from '../../assets/images';

interface TransactionProps {
  isMobile: boolean;
}

const Transaction: React.FC<TransactionProps> = ({ isMobile }) => {
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
      <CustomCard
        isMobile={isMobile}
        style={{ marginTop: isMobile ? '50px' : '130px', marginBottom: '20px' }}
      >
        <Header title={'Authorise this transaction on Boost Bank App'} />
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            color: '#231F20',
            mt: '8px',
          }}
        >
          {'Time Remaining: '} <CountdownTimer />
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '40px',
            backgroundColor: '#fff0e6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            mt: '10px',
            padding: '10px',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <img
              src={Assets.transaction.info_icon}
              alt="info_icon"
              style={{
                width: '24px',
                height: '24px',
                marginRight: '7px',
              }}
            />
            <Typography
              sx={{ fontSize: '12px', fontWeight: '400', color: '#231F20' }}
            >
              {"We've sent a request to you. Please "}
              <span style={{ fontWeight: '600' }}>
                authenticate on your Boost Bank app.
              </span>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: isMobile ? '279px' : '251px',
            backgroundColor: '#F3F4F4',
            borderRadius: isMobile ? '5px' : '7px',
            display: 'flex',
            alignItems: 'center',
            mt: '16px',
            padding: '16px',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: isMobile ? '400' : '500',
              color: '#58595B',
            }}
          >
            Total Amount
          </Typography>
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#231F20',
            }}
          >
            RM 10.95
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? '16px' : '14px',
              fontWeight: '700',
              color: '#231F20',
            }}
          >
            {"McDonald's Batu Caves DT"}
          </Typography>
          <Divider sx={{ color: '#CDCDCD', width: '100%', m: '16px' }} />
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: '12px' }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#58595B',
              }}
            >
              Date & Time
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#231F20',
              }}
            >
              Today, 3:29pm
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: '12px' }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#58595B',
              }}
            >
              Transfer From
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#231F20',
              }}
            >
              **** **** **** 3193
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: '12px' }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#58595B',
              }}
            >
              Account Type
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#231F20',
              }}
            >
              Current/Saving
            </Typography>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '20px' }}>
          <TextButton
            title="Cancel Payment"
            loading={false}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          />
        </Box>
      </CustomCard>
      <div
        style={{
          borderRadius: '24px',
          backgroundColor: '#97031D',
          width: isMobile ? '328px' : '548px',
          height: isMobile ? '360px' : '320px',
          marginBottom: '35px',
          padding: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#FFFFFF',
          }}
        >
          {"If you didn't get the notification, follow the steps below:"}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
          <img
            src={Assets.transaction.number_one}
            alt="duitnow-logo"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#FFFFFF',
            }}
          >
            Launch the Boost Bank app.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
          <img
            src={Assets.transaction.number_two}
            alt="duitnow-logo"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#FFFFFF',
            }}
          >
            {"On Dashboard, tap the 'Request Banner' on the top of the screen."}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
          <img
            src={Assets.transaction.number_three}
            alt="duitnow-logo"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#FFFFFF',
            }}
          >
            {"Tap 'Approve' to authorise the transaction."}
          </Typography>
        </Box>
        <Divider
          sx={{
            color: '#B64E60',
            width: '100%',
            mt: isMobile ? '15px' : '45px',
          }}
        />
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#FFFFFF',
            mt: '20px',
          }}
        >
          {
            'Please contact our Customer Support Hotline at +6016 6999858 for assistance.'
          }
        </Typography>
      </div>
    </Box>
  );
};

export default Transaction;
