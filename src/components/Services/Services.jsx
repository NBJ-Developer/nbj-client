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
import './Services.css'
import Wvector from '../../assets/images/BBVector.png'
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const images = [
    {
        label: 'Ground Support',
        imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Aircraft Charter & Bookings',
        imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Maintenance',
        imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Wings Inflight',
        imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    ];

export default function Services() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

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
        <Box sx={{ display: {xs: 'block', md: 'none'},
                    marginTop: '56px'
                }}>
            <h1 className='our'>OUR <span className='inner_story'>SERVICES</span> </h1>
            <Box sx={{  display: 'flex',
                        justifyContent: 'center'
                    }}>
                <Box sx={{  maxWidth: '54vw', 
                            height: '350px', 
                            flexGrow: 1 }}>
                    
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                height: '226px',
                                display: 'block',
                                maxWidth: '54vw',
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
        </Box>

        {/* MEDIUM DEVICE */}
        <Box sx={{    display: {xs: 'none', md: 'block'},
                    marginTop: '119px',
                    textAlign: 'center'
                }}>
                    <h1 className='our_web'>OUR <span className='inner_story'>SERVICES</span> </h1>
                    <p className='p_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    <Box sx={{  display: 'flex',
                                justifyContent: 'center'
                            }}>
                        <Box sx={{  width: '90vw',
                                    height: '450px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>

                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px',
                                                marginRight: '50px'
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Ground Support</p>
                                    </Box>

                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px', 
                                                marginRight: '50px'
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Aircraft Charter & Bookings</p>
                                    </Box>

                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px',
                                                marginRight: '50px'
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Maintenance</p>
                                    </Box>
                                    
                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px',
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Wings Inflight</p>
                                    </Box>
                        </Box>
                    </Box>
                    
                    <Box sx={{  display: 'flex',
                                justifyContent: 'center'
                            }}><ContainedButtonsMB /></Box>
        </Box>

    </Box>
  );
}