import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TestimonialsPapper from '../papper/TestimonialsPapper';
import Slider from '../../elements/Slidereffect/Slidereffect'

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
            ocupation: 'Software Engineer',
            left: true,
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

      {/* MEDIUM DEVICE */}
      <Box sx={{
        mt: 16,
        width: '100%',
      }}>
        <Typography sx={{
          display: {xs: 'none', md: 'block'},
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
          mb: 2,
          display: {xs: 'block', md: 'none'},
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '24px',
          color: '#000000',
          textAlign: 'center',
        }} 
          variant='h1'>
          WHAT OUR <span className='span1'>CUSTOMERS</span>  SAY
      </Typography>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '25px',
          textAlign: 'center',
          my: 4,
          display: {xs: 'none', md: 'block'},
        }}>
          What our <span className='orangeSpan'>Clients</span>   have to say
        </Typography>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            '& > :not(style)': {
            mr: {xs: 0, md: 4},
            width:  350,
            height: 270,
            },
          }}>
            <Slider slideComponent={
              <Box>
                <TestimonialsPapper data={data[0]}/>
              </Box>
             }/>
            <Slider slideComponent={
              <Box sx={{
                pt: {xs: 0, md: 8},
              }}>
                <TestimonialsPapper data={data[1]}/>
              </Box>
            }/>
            <Slider slideComponent={
              <Box sx={{
                pt: {xs: 0, md: 16},
              }}>
                <TestimonialsPapper data={data[2]}/>
              </Box>
            }/>          
          </Box> 
        </Box>
         
      </Box>
    </Box>
  );
}