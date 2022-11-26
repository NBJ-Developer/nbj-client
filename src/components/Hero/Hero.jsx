import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import Slider from '../../elements/Slidereffect/Slidereffect';
import Statistic from '../Statistic/Statistic';
import ImageSlider from '../../elements/Slidereffect/ImageSlider';

const imageArray = ['airplain4.png', 'airplain1.png']

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
        display: 'flex', 
      }}>
        <Box sx={{
          zIndex: -2
        }}>
        <ImageSlider slides={imageArray}/>
        </Box>
      
        <Box sx={{ 
          position: 'absolute',
          backgroundImage: 'linear-gradient(rgba(32, 53, 120, 0.91), rgba(32, 53, 120, 0))',
          width: '100%',
          height: '100vh', 
          flexGrow: 1,
        }}>

      </Box>
      </Box>
    
      <Box sx={{ 
        position: 'absolute',
        top: {xs: '25vh', sm: '17vh', md:'23vh'},
        px: {xs: 4, md: 6},
        width: '100%', 
        height: '65vh',
      }}>
         <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '5vh', sm: '7vh', md:'10vh'},
            lineHeight: {xs: '6vh', sm: '8vh', md: '11vh'},
            color: '#ffffff',
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
            fontSize: {xs: '5vh', sm: '7vh', md:'10vh'},
            lineHeight: {xs: '6vh',sm: '8vh', md: '11vh'},
            color: '#ffffff', 
          }}>
          and ground support 
          </Typography >
        }/>

        <Slider slideComponent={
          <Typography sx={{ 
            font: 'Raleway',
            fontWeight: '700',
            fontSize: {xs: '5vh', sm: '7vh', md:'10vh'},
            lineHeight: {xs: '6vh',sm: '8vh', md: '11vh'},
            color: '#ffffff',
          }}>
            flights
          </Typography >
        }/> 
          <Typography sx={{ 
          mt: 3,
          width: {xs: '70vw', sm: '65vw', md: '55vw'},
          font: 'inter',
          fontWeight: '300',
          fontSize: {xs: '2.5vh', sm: '3vh', md: '3vh'},
          lineHeight: {xs: '4vh', sm: '4vh', md: '4vh'},
          color: '#ffffff', 
          textAlign: 'justify',
        }}>
          Our goal is simply to offer the highest standards of professionalism
          and service as measured by our safety record, dispatch reliability
          and customer satisfaction
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
      top: {xs: '87vh', sm: '87vh', md: '90vh'},
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
