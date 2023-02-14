import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServicesCard from './ServicesCard';
import Slider from '../../elements/Slidereffect/Slidereffect'
import { Grid } from '@mui/material';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const content = [
  {
    label: 'Ground Support',
    imgPath: 'airplain3.png',
    body: 'For Excellent aircraft and passenger handling handling.',
    buttonDisplay: 'primary',
    primaryButton: 'Read More',
  },
  {
    label: 'Aircraft Charter & Bookings',
    imgPath: 'service1.png',
    body: 'For private charter and commercial bookings handling. ',
    buttonDisplay: 'primary',
    primaryButton: 'Read More',
  },
  {
    label: 'Crew Services',
    imgPath: 'service2.png',
    body: 'We make available crew transportation and hotel bookings.',
    buttonDisplay: 'primary',
    primaryButton: 'Read More',
  },
  {
    label: 'Hospitality Service',
    imgPath: 'service3.png',
    body: 'Committed to delivering unparalleled hospitable service.',
    buttonDisplay: 'primary',
    primaryButton: 'Read More',
  },
];

export default function Services() {

  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 16,
        width: '100%'
      }}>
        <Slider slideComponent={
          <Typography variant='h1' sx={{
            width: '100%',
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: { xs: '27px', sm: '28px' },
            lineHeight: { xs: '42px', sm: '45px' },
            color: '#434343',
            textAlign: 'center',
          }}>
            OUR
            <span className='span1'>
              SERVICES
            </span>
            AREAS
          </Typography>
        } />

        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box sx={{
            width: '65%',
            mt: 3,
          }}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Slider slideComponent={<ServicesCard content={content[0]} />} />
              </Grid>
              <Grid item md={12}>
                <Slider slideComponent={<ServicesCard content={content[1]} />} />
              </Grid>
              <Grid item md={12}>
                <Slider slideComponent={<ServicesCard content={content[2]} />} />
              </Grid>
              <Grid item md={12}>
                <Slider slideComponent={<ServicesCard content={content[3]} />} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{
        display: { xs: 'none', md: 'block' },
        width: '100%',
        marginTop: '180px',
        textAlign: 'center',
      }}>
        <Slider slideComponent={
          <Typography variant='h1' sx={{
            width: '100%',
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '38px',
            textAlign: 'center',
          }} >
            OUR
            <span className='span1'>
              SERVICES
            </span>
          </Typography>
        } />


        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '27px',
          letterSpacing: '0.03em',
          color: '#000000',
          margin: '15px 0'
        }}>
          Our plan is to fulfil your every travel wish in every way possible.
        </Typography>
        <Box sx={{
          width: '100%',
          px: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
        }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Slider slideComponent={<ServicesCard content={content[0]} />} />
              </Grid>
              <Grid item md={3}>
                <Slider slideComponent={<ServicesCard content={content[1]} />} />
              </Grid>
              <Grid item md={3}>
                <Slider slideComponent={<ServicesCard content={content[2]} />} />
              </Grid>
              <Grid item md={3}>
                <Slider slideComponent={<ServicesCard content={content[3]} />} />
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Box>

    </Box>
  );
}