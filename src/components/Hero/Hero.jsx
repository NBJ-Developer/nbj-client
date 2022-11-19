import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import SecondaryButton from '../../elements/Button/SecondaryButton';
import Slider from '../../elements/Slidereffect/Slidereffect';
import Statistic from '../Statistic/Statistic';


const images = [
  {
    label: 'NBJ-Airline',
    imgPath:'airplain1.png'
  },
  {
    label: 'NBJ-Airline',
    imgPath:'airplain4.png'
  },
];

const content = [
  {
   label: '5000+',
   body: 'Total flights', 
  },
  {
    label: '0',
    body: 'Flight crash', 
   },
   {
    label: '250',
    body: 'Destination', 
   },
   {
    label: '100K+',
    body: 'Total Passengers', 
   },
]

const imageArray = ['airplain4.png', 'airplain1.png', 'airplain3.png']

function SwipeableHeroStepper() {

  return (
    <Box>
      <Box  sx={{ 
        maxWidth: '100%', 
        position: 'relative', 
      }}
      >
      <Box sx={{
        display: {xs: 'none', md: 'flex'}, 
      }}>
      <Box
        component="img"
        sx={{
          display: 'block',
          overflow: 'hidden',
          width: '100%',
          height: '100vh',
        }}
        src={images[1].imgPath}
        alt={images[1].label}
      />
        <Box sx={{ 
          position: 'absolute',
          backgroundImage: 'linear-gradient(rgba(32, 53, 120, 0.91), rgba(32, 53, 120, 0))',
          width: '100%',
          height: '100%', 
          flexGrow: 1,
        }}>

      </Box>
      </Box>
      <Box sx={{
          display: {xs: 'block', md: 'none'},
          position: 'relative',
          width: '100%',
        }}>
          <Box sx={{ 
          position: 'absolute',
          backgroundImage: 'linear-gradient(rgba(32, 53, 120, 0.91), rgba(32, 53, 120, 0))',
          width: '100%',
          height: '100%', 
          flexGrow: 1,
        }}>

      </Box>
        <img src="airplainMobile.png" alt="NBJ-LOGO" style={{width: '100%'}}/>
        
        <Box sx={{ 
          position: 'absolute',
          bottom: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
      }}>
          <Typography sx={{
          width: '70%',
          font: 'Raleway',
          fontWeight: '700',
          fontSize: '38px',
          lineHeight: '37px',
          color: '#ffffff',
          textAlign: 'center', 
      }}>
          Big Text Header 2 lines
        </Typography >
        </Box>
        
      </Box>
      <Box sx={{ 
        display: {xs: 'none', md: 'block',},
        position: 'absolute',
        top: {xs: '520px', md:'20vh'},
        left: {xs: '10px', md: '80px'},
        width: '90%', 
      }}>
        <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '38px', md:'78px'},
            lineHeight: {xs: '37px', md: '91px'},
            color: '#ffffff',
            textAlign: {xs: 'center', md: 'left'}, 
          }}>
            <span style={{
              color: '#F9A020',
            }}>World class</span> charter
          </Typography >
        }/>

        <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '38px', md:'78px'},
            lineHeight: {xs: '37px', md: '91px'},
            color: '#ffffff',
            textAlign: {xs: 'center', md: 'left'}, 
          }}>
          and ground support 
          </Typography >
        }/>

        <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '38px', md:'78px'},
            lineHeight: {xs: '37px', md: '91px'},
            color: '#ffffff',
            textAlign: {xs: 'center', md: 'left'}, 
          }}>
            flights
          </Typography >
        }/>
        
        <Typography sx={{ 
          display: {xs: 'none', md: 'block'},
          mt: 3,
          font: 'inter',
          fontWeight: '300',
          fontSize: '24px',
          lineHeight: '24px',
          color: 'rgba(255, 255, 255, 0.9)', 
        }}>
          Our goal is simply to offer the highest standards of professionalism
        </Typography>
        <Typography sx={{ 
          display: {xs: 'none', md: 'block'},
          font: 'inter',
          fontWeight: '300',
          fontSize: '24px',
          lineHeight: '36px',
          color: 'rgba(255, 255, 255, 0.9)', 
        }}>
          and service as measured by our safety record, dispatch reliability
        </Typography>
        <Typography sx={{ 
          display: {xs: 'none', md: 'block'},
          font: 'inter',
          fontWeight: '300',
          fontSize: '24px',
          lineHeight: '36px',
          color: 'rgba(255, 255, 255, 0.9)', 
        }}> and customer satisfaction
        </Typography>
        <Box sx={{
          mt: 4,
          display: {xs: 'none', md: 'block'},
        }}>
          <PrimaryButtons buttonLabel={'Explore'}/>
        </Box>
        
      </Box>
    </Box>
    <Typography sx={{ 
      display: {xs: 'block', md: 'none'},
      mt: '15px',
      px: 4,
      textAlign: 'center',
      font: 'Raleway',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '30px',
    }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Et augue ante tellus non leo.
    </Typography>
    <Box sx={{
      position: 'absolute',
      bottom: '-100px',
      width: '100%',
      display: {xs: 'none', md: 'flex'},
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Statistic />
    </Box>
    
    <Box sx={{
      display: {xs: 'flex', md: 'none'},
      width: '100%',
      justifyContent: 'center',
      paddingY: '30px',
    }}>
      <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '60%',
    }}>
      <PrimaryButtons buttonLabel={'Button'}/>
      <SecondaryButton buttonLabel={'Button'} />
    </Box>
    </Box>
    <Box sx={{
      display: {xs: 'flex', md: 'none'},
      justifyContent: 'center',
    }}>
      <Box sx={{
      backgroundColor: '#4264CC',
      height: '2px',
      width: '70%',
    }}>
    </Box>
    </Box>
    </Box>
    
  );
}

export default SwipeableHeroStepper;
