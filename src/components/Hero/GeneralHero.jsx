import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Slider from '../../elements/Slidereffect/Slidereffect';
import NavBar from '../NavBar/NavBar'

const pages = ['Home', 'About', 'Services', 'Contact'];

const GeneralHero = ({ display, bgImage, content }) => {

  return (
    <AppBar position="static" elevation={0} sx={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      borderRadius: '0 0 25px 25px',
    }}>
      <Container maxWidth="xl" sx={{
        backgroundColor: !display? 'rgba(32, 53, 120, 0.8)':'rgba(32, 53, 120, 0.4)' ,
        borderRadius: '0 0 25px 25px',
        height: {xs:'149px', md:'364px'},
        pt: {xs: '20px', md:'30px'},
        }}>
          <NavBar />
        <Box sx={{
          mt: {xs:'30px', md:'80px'},
          width: {xs:'300px', md:'600px'},
          ml: {xs:'10px', md:'30px'},
        }}>
        <Box sx={{
          display: { xs: 'none', md: 'block', },
          pt: !display? 10: 7,
          maxWidth: '50vw',
        }}>
          <Slider slideComponent={
              <Typography variant="h3" component="h3" sx={{
                font: 'Raleway',
                marginBottom: '10px',
              }}>
                {content.header}
              </Typography>
          }/>
          <Slider slideComponent={
            <Typography sx={{
              font: 'inter',
              fontWeight: '400',
              fontSize: '3vh',
              lineHeight: '3vh',
              color: '#ffffff',
              textAlign: 'justify',
              mt: 2,
            }}>
              {content.body}
            </Typography>
          }/>
          
        </Box>
        <Box sx={{
          display: {
            md: 'none',
            xs: 'block'
          },
          mt: 10,
        }}>
          <Typography variant="h4" component="h4" sx={{
                font: 'Raleway',
              }}>
            {content.header}
          </Typography>
        </Box>
         
        </Box>
      </Container>
    </AppBar>
  );
};
export default GeneralHero;