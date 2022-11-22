import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
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
        display: {xs: 'flex', md: 'flex'}, 
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
        position: 'absolute',
        top: {xs: '25vh', md:'25vh'},
        left: {xs: '10px', md: '80px'},
        width: '90%', 
      }}>
        <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '30px', sm: '45px', md:'70px'},
            lineHeight: {xs: '50px',sm: '55px', md: '80px'},
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
            fontSize: {xs: '30px', sm: '45px', md:'70px'},
            lineHeight: {xs: '50px',sm: '55px', md: '80px'},
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
            fontSize: {xs: '30px', sm: '45px', md:'70px'},
            lineHeight: {xs: '50px',sm: '55px', md: '80px'},
            color: '#ffffff',
            textAlign: {xs: 'center', md: 'left'}, 
          }}>
            flights
          </Typography >
        }/>
        
        <Typography sx={{ 
          mt: 3,
          font: 'inter',
          fontWeight: '300',
          fontSize: {xs: '14px', sm: '18px', md: '22px'},
          lineHeight: {xs: '25px', sm: '32px', md: '36px'},
          color: '#ffffff', 
        }}>
          Our goal is simply to offer the highest standards of professionalism
        </Typography>
        <Typography sx={{ 
          font: 'inter',
          fontWeight: '300',
          fontSize: {xs: '14px', sm: '18px', md: '22px'},
          lineHeight: {xs: '25px', sm: '32px', md: '36px'},
          color: '#ffffff', 
        }}>
          and service as measured by our safety record, dispatch reliability
        </Typography>
        <Typography sx={{ 
          font: 'inter',
          fontWeight: '300',
          fontSize: {xs: '14px', sm: '18px', md: '22px'},
          lineHeight: {xs: '25px', sm: '32px', md: '36px'},
          color: '#ffffff', 
        }}> and customer satisfaction
        </Typography>
        <Box sx={{
          mt: 4,
        }}>
          <PrimaryButtons buttonLabel={'Explore'}/>
        </Box>
        
      </Box>
    </Box>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
     <Box sx={{
      position: 'absolute',
      bottom: '-100px',
      width: {xs: '100%', md: '100%'},
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Statistic />
    </Box> 
    </Box>
    
    </Box>
    
  );
}

export default SwipeableHeroStepper;
