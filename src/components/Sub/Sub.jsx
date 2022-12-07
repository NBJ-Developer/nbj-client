import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import InputField from './InputField';
import Slider from '../../elements/Slidereffect/Slidereffect';


export default function Sub() {

  return (
    <div id='contact'>
    <Box>
       <Box sx={{   
            display: 'flex',
            mt: 16,
            justifyContent: 'center'
        }}>
          <Box sx={{ 
              fontFamily: 'Inter',
              fontStyle: 'Regular',
              width: '75%',
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Slider slideComponent={
                <Typography sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 700,
                  fontSize: {xs: '27px', sm: '28px', md:'30px'},
                  lineHeight: {xs: '42px', sm: '45px', md: '55px'},
                  color: '#262626',
                  textAlign: 'center',
                }}>
                    Join Our Mail list
                </Typography>
              }/>
                 
                <Typography sx={{
                    font: 'Open Sans',
                    fontWeight: '400',
                    fontSize: {xs: '12px', sm: '13px', md: '14px'},
                    lineHeight: {xs: '23px', sm: '25px', md: '27px'},
                    color: '#262626',
                    textAlign: 'center',
                    marginTop: '10px'
                }}>
                   Receive updates on our services and promotions straight to your inbox.
                </Typography>
                <Box sx={{ 
                  width: '100%', 
                  display: 'flex',
                  flexDirection: {xs: 'column', md: 'row'},
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 2,
                }}>
                    <InputField content={{
                      label:'Your Name',
                      color: '#06133C',
                      }}/>
                    <InputField content={{
                      label:'Email Address',
                      color: '#06133C',
                      }}/>
                    <Box sx={{ 
                      mb: 2,
                      marginRight: '10px',
                    }}>
                      <PrimaryButtons buttonLabel={'Join'} />
                </Box>
                </Box>
              </Box>
               
            </Box>
        </Box>
        </div>
  );
}