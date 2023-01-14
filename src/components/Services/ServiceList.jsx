import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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


function ServiceList() {

  const listItems = [
    'Flight Dispatch: Efficient and accurate flight plan, information and necessary\n permissions to enable smooth travels. ',
    'Refuelling ',
    'Permits: These permits include local and international landing and flight permits.  ',
    'Passenger and Luggage Handling  ',
    'Marshalling and Parking',
]

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
    <Box sx={{
        width: '100%'
    }}>
        {/* SMALL DEVICE */}
        {/* <Box sx={{
            display: { xs: 'block', md: 'none'},
            width: '100%',
            marginTop: '34px',
            textAlign: 'center'
        }}>
            <Typography variant='h6' sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '13px',
                lineHeight: '18px',
                color: '#121212',
            }}>
                GALLERY
            </Typography>
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '13px',
                lineHeight: '18px',
                color: '#121212',
                marginTop: '5px',
                padding: '0 30px'
            }}>
                If you want to know more about us, you’re in the right place. 
                     Read to learn how we can assist you
            </Typography>
            
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '60%',
                    height: '160px',
                    background: '#d9d9d9',
                    marginTop: '28px'
                }}></Box>
            </Box>

            <Typography variant='h6' sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '22px',
                color: '#000000',
                marginTop: '10px'
            }}>
                Hanger
            </Typography>
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
                color: '#000000',
                marginTop: '5px',
                padding: '0 40px'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Quisque adipiscing placerat in nisl morbi ornare. 
            </Typography>
            
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'
            }}>
                <Box sx={{  maxWidth: '60%', 
                            flexGrow: 1,
                            marginTop: '28px' 
                        }}>
                        {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 4 ? (
                            <Box
                                component="img"
                                sx={{
                                height: '150px',
                                display: 'block',
                                maxWidth: '100%',
                                overflow: 'hidden',
                                width: '100%',
                                marginTop: '20px',
                                borderRadius: '5px 5px 0 0'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                            ) : null}
                        </div>
                        ))}
                    <Paper
                        square
                        elevation={0}
                        sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 30,
                                bgcolor: '#d9d9d9',
                                borderRadius: '0  0 5px 5px',
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 16,
        px: 6,
      }}>
        <Box component="img" sx={{
          objectFit: 'cover',
          display: 'block',
          width: '65%',
          height: 'AUTO',
        }}
          src={'servicesAirplain1.png'}
          alt={'servicesAirplain1.png'}
        />
          <Box >
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '19px',
              lineHeight: '25.87px',
              color: '#000000',
              textAlign: 'justify',
              mt: 6,
            }}>
            Embodied in our ground support service are: 
            </Typography>
            <List sx={{ 
                width: '100%', 
              }}
              aria-label="contacts"
              >
                {listItems.map((item, index) => (
                  <ListItem sx={{px: 0,}}>
                    <ListItemButton sx={{
                      p: 0,
                      m: 0,
                    }}>
                    <ListItemIcon>
                        <CircleIcon style={{
                          color: '#F9A020',
                          fontSize: '12px',
                        }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Box>
      </Box>
    </Box>
  )
}

export default ServiceList