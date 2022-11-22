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
        maxHeight: '100vh', 
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
        top: {xs: '25vh', sm: '17vh', md:'25vh'},
        left: {xs: '10px', sm: '15px', md: '80px'},
        width: '90%', 
        height: 'auto',
      }}>
         <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '10vw', sm: '10vw', md:'70px'},
            lineHeight: {xs: '8vh', sm: '12vh', md: '80px'},
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
            fontSize: {xs: '10vw', sm: '10vw', md:'70px'},
            lineHeight: {xs: '8vh',sm: '12vh', md: '80px'},
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
            fontSize: {xs: '10vw', sm: '10vw', md:'70px'},
            lineHeight: {xs: '8vh',sm: '12vh', md: '80px'},
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
          fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
          lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
          color: '#ffffff', 
        }}>
          Our goal is simply to offer the highest standards of professionalism
        </Typography>
        <Typography sx={{ 
          font: 'inter',
          fontWeight: '300',
          fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
          lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
          color: '#ffffff', 
        }}>
          and service as measured by our safety record, dispatch reliability
        </Typography>
        <Typography sx={{ 
          font: 'inter',
          fontWeight: '300',
          fontSize: {xs: '3.5vw', sm: '3vw', md: '22px'},
          lineHeight: {xs: '4vh', sm: '4vh', md: '36px'},
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
      bottom: {xs: '-22vh', md: '-11vh'},
      width: '100%',
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
