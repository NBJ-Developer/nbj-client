import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TestimonialsPapper from '../papper/TestimonialsPapper';

export default function Testimonials() {
    const data = [
        {
            label: 'Hospitality Service',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat malesuada id mus donec feugiat a est platea viverra.',
            name: 'Pat Kotan',
            ocupation: 'Govt Liason'
        },
        {
            label: 'Aircraft Charter',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat malesuada id mus donec feugiat a est platea viverra.',
            name: 'Salaudeen',
            ocupation: 'Software Engineer'
        },
        {
            label: 'Ground Support',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat malesuada id mus donec feugiat a est platea viverra.',
            name: 'Akeni Oreva',
            ocupation: 'Business Owner'
        },
    ]

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
        mt: 8,
        width: '100%',
      }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '30px',
          lineHeight: '35px',
          textAlign: 'center',
          marginTop: '22px'
        }}>
          TESTIMONIALS
        </Typography>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '25px',
          textAlign: 'center',
          marginTop: '14px'
        }}>
          What our <span className='span1'>Clients</span>   have to say
        </Typography>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box sx={{
          marginTop: '15px',
          display: 'flex',
          '& > :not(style)': {
          mr: 7,
          mt: 1,
          width: 270,
          height: 169,
          },
        }}>
          <Box>
            <TestimonialsPapper data={data[0]}/>
          </Box>
          <Box sx={{
            pt: 4,
          }}>
            <TestimonialsPapper data={data[1]}/>
          </Box>
          <Box sx={{
            pt: 8,
          }}>
            <TestimonialsPapper data={data[2]}/>
          </Box>
        </Box> 
        </Box>
         
      </Box>
    </Box>
  );
}