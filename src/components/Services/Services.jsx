import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import SubServices from './SubServices';
import ServicesCard from './ServicesCard';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const content = [
    {
        label: 'Ground Support',
        imgPath: 'airplain3.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.'
    },
    {
        label: 'Aircraft Charter & Bookings',
        imgPath: 'service1.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.'
    },
    {
        label: 'Maintenance',
        imgPath: 'service2.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.'
    },
    {
        label: 'Wings Inflight',
        imgPath: 'service3.png',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus morbi fringilla.'
    },
    ];

export default function Services() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return (
    <Box>
        {/* SMALL DEVICE */}
        {/* <Box sx={{ 
            display: {xs: 'block', md: 'none'},
            marginTop: '56px',
            width: '100%'
        }}>
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '23px',
                marginLeft: '30px',
                marginBottom: '5px'
            }}  variant='h1'>
                OUR
                <span style={{
                    backgroundColor: '#d9d9d9',
                    color: '#000000',
                    borderRadius: '5px',
                    padding: '2px',
                    marginLeft: '5px'
                }}>
                    SERVICES
                </span> 
            </Typography>
            <Box sx={{  display: 'flex',
                        justifyContent: 'center'
                    }}>
                <Box sx={{  maxWidth: '55%', 
                            flexGrow: 1 
                        }}>
                    
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 4 ? (
                            <Box
                                component="img"
                                sx={{
                                height: '226px',
                                display: 'block',
                                maxWidth: '100%',
                                overflow: 'hidden',
                                width: '100%',
                                marginTop: '20px',
                                borderRadius: '20px 20px 0 0'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                            ) : null}
                        </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 50,
                                bgcolor: '#d9d9d9',
                                borderRadius: '0  0 20px 20px',
                            }}
                    >
                        <Typography>{images[activeStep].label}</Typography>
                    </Paper>

                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                        </Button>
                        }
                    />
                </Box>
            </Box>
        </Box> */}

        {/* MEDIUM DEVICE */}
        <Box sx={{    
            display: {xs: 'none', md: 'block'},
            width: '100%',
            marginTop: '119px',
            textAlign: 'center',
        }}>
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '38px'
            }} variant='h1'>
                OUR
                <span style={{
                    backgroundColor: '#d9d9d9',
                    color: '#000000',
                    borderRadius: '5px',
                    padding: '2px',
                    marginLeft: '5px'
                }}>
                    SERVICES
                </span> 
            </Typography>
            
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px'
            }}>
              <ServicesCard content={content[0]}/>
              <ServicesCard content={content[1]}/>
              <ServicesCard content={content[2]}/>
              <ServicesCard content={content[3]}/>
            </Box>
        </Box>

    </Box>
  );
}