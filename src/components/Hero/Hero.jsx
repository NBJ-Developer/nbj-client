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
      <Box sx={{ 
      position: 'absolute',
      top: '200px',
      left: '80px',
      width: '550px', 
      }}>
        <Typography sx={{ 
          font: 'Raleway',
          fontWeight: '700',
          fontSize: '64px',
          lineHeight: '85px',
          color: '#ffffff', 
      }}>
          Big Text Header 2 lines
        </Typography >
        <Typography sx={{ 
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
    <Box sx={{
          width: '100%',
          display: 'flex',
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
