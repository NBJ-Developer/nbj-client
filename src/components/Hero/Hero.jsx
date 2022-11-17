import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import SecondaryButton from '../../elements/Button/SecondaryButton';
import { Paper } from '@mui/material';
import ServicesDetails from './ServicesDetails';


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
      <Box sx={{ 
        maxWidth: '100%', 
        flexGrow: 1,
        position: 'relative' 
      }}>
      <Box sx={{
        display: {xs: 'none', md: 'flex'}, 
      }}>
      <Box
        component="img"
        sx={{
          height: '100vh',
          display: 'block',
          overflow: 'hidden',
          width: '100%',
        }}
        src={images[1].imgPath}
        alt={images[1].label}
      />
      </Box>
      <Box sx={{
          display: {xs: 'block', md: 'none'},
          position: 'relative',
          width: '100%',
        }}>
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
        top: {xs: '520px', md:'90px'},
        left: {xs: '10px', md: '80px'},
        width: '64%', 
      }}>
        <Typography sx={{ 
          font: 'Raleway',
          fontWeight: '700',
          fontSize: {xs: '38px', md:'64px'},
          lineHeight: {xs: '37px', md: '85px'},
          color: '#ffffff',
          textAlign: {xs: 'center', md: 'left'}, 
      }}>
          World class charter and ground support flights
        </Typography >
        <Typography sx={{ 
          display: {xs: 'none', md: 'block'},
          mt: '5px',
          font: 'inter',
          fontWeight: '300',
          fontSize: '24px',
          lineHeight: '24px',
          color: 'rgba(255, 255, 255, 0.9)', 
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Et augue ante tellus non leo.
        </Typography>
        <Box sx={{
          mt: '30px',
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
      bottom: '-200px',
      width: '100%',
      display: {xs: 'none', md: 'flex'},
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Paper sx={{
      width: '90%',
      px: 3,
      display: {xs: 'none', md: 'flex'},
      justifyContent: 'space-between',
      paddingY: '30px',
    }}>
       <ServicesDetails content={content[0]}/>
       <ServicesDetails content={content[1]}/>
       <ServicesDetails content={content[2]}/>
       <ServicesDetails content={content[3]}/>
    </Paper>
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
