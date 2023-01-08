import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TestimonialsPapper from '../papper/TestimonialsPapper';
import Slider from '../../elements/Slidereffect/Slidereffect'

export default function Testimonials() {
  const data = [
    {
      label: 'Aircraft Charter',
      para: `Customer testimonials are more effective than paid marketing 
        copy as they take the spotlight away from the seller to shine it on 
        the customers. `,
      name: 'Chief Elona Maxwell',
      ocupation: 'CEO Max Ent.'
    },
    {
      label: 'Hospitality Service',
      para: `In promotion and advertising, a testimonial or show consists 
      of a person's written statement extolling the virtue of a product.`,
      name: 'Chief Elona Maxwell',
      ocupation: 'CEO Max Ent.',
      left: true,
    },
    {
      label: 'Passenger Service',
      para: `Testimonials work because they aren''t strong sales pitches, 
      they come across in an unbiased voice and establish trust`,
      name: 'Chief Elona Maxwell',
      ocupation: 'CEO Max Ent.'
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
          display: { xs: 'none', md: 'block' },
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
          display: { xs: 'block', md: 'none' },
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: { xs: '27px', sm: '28px', md: '30px' },
          lineHeight: { xs: '42px', sm: '45px', md: '55px' },
          color: '#434343',
          color: '#000000',
          textAlign: 'center',
        }}
          variant='h1'>
          WHAT OUR <span className='span1'>CUSTOMERS</span>  SAY
        </Typography>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: { xs: '27px', sm: '28px', md: '30px' },
          lineHeight: { xs: '42px', sm: '45px', md: '55px' },
          color: '#434343',
          textAlign: 'center',
          my: 4,
          display: { xs: 'none', md: 'block' },
        }}>
          What our <span className='orangeSpan'>Clients</span>   have to say
        </Typography>
        <Box sx={{
          pl: { xs: 4, sm: 4, md: 6 },
          pr: { xs: 4, sm: 4, md: 2 },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            '& > :not(style)': {
              mr: { xs: 0, md: 4 },
              width: { xs: '65vw', sm: '65vw', md: 400 },
              height: 'auto',
            },
          }}>
            <Slider slideComponent={
              <Box>
                <TestimonialsPapper data={data[0]} />
              </Box>
            } />
            <Slider slideComponent={
              <Box sx={{
                pt: { xs: 0, md: 8 },
              }}>
                <TestimonialsPapper data={data[1]} />
              </Box>
            } />
            <Slider slideComponent={
              <Box sx={{
                pt: { xs: 0, md: 16 },
              }}>
                <TestimonialsPapper data={data[2]} />
              </Box>
            } />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}