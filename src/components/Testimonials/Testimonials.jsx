import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TestimonialsPapper from '../papper/TestiminialsPapper';

export default function Testimonials() {
  return (
    <Box>
      {/* SMALL DEVICE */}
        <Box sx={{  
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
        }}>
            <Box sx={{  
                width: '80%',
                height: '470px',
                marginTop: '56px',
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '19px',
                    lineHeight: '22px',
                    color: '#000000',
                    textAlign: 'center'
                }} variant='h1'>
                    WHAT OUR CUSTOMERS SAY
                </Typography>
            </Box>
        </Box>

      {/* MEDIUM DEVICE */}
        <Box sx={{  
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center'
        }}>
            <Box sx={{ 
                marginTop: '119px',
                width: '90%',
                height: '570px'
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '35px',
                    color: '#000000',
                    textAlign: 'center',
                    marginTop: '22px'
                }} variant='h1'>
                    TESTIMONIALS
                </Typography>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#000000',
                    textAlign: 'center',
                    marginTop: '14px'
                }}>
                    What our Clients  have to say
                </Typography>
                <TestimonialsPapper />
            </Box>
        </Box>
    </Box>
  );
}