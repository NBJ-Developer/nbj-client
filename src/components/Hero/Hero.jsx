import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography } from '@mui/material';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

function SwipeableHeroStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
        <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={'6000'}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100vh',
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      </Box>
      <Box sx={{
          display: {xs: 'block', md: 'none'},
        }}>
        <img src="airplainMobile.png" alt="NBJ-LOGO" style={{width: '100%'}}/>
      </Box>
      <Box sx={{ 
        position: 'absolute',
        top: {xs: '520px', md:'200px'},
        left: {xs: '10px', md: '80px'},
        width: '550px', 
      }}>
        <Typography sx={{ 
          font: 'Raleway',
          fontWeight: '700',
          fontSize: {xs: '38px', md:'64px'},
          lineHeight: {xs: '37px', md: '85px'},
          color: '#ffffff',
          textAlign: {xs: 'center', md: 'left'}, 
      }}>
          Big Text Header 2 lines
        </Typography >
        <Typography sx={{ 
          display: {xs: 'none', md: 'block'},
          mt: '5px',
          font: 'Raleway',
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
      fontWeight: '300',
      fontSize: '24px',
      lineHeight: '30px',
    }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Et augue ante tellus non leo.
    </Typography>
    <Box sx={{
      display: {xs: 'none', md: 'flex'},
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#4264CC',
      paddingY: '30px',
    }}>
      <Typography sx={{
          textAlign: 'center',
          color: '#FFFFFF',
          marginY: '20px',
          width: '60%',
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et augue 
        ante tellus non leo. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Et augue ante tellus non leo.
      </Typography>
    </Box>
    
    </Box>
    
  );
}

export default SwipeableHeroStepper;
