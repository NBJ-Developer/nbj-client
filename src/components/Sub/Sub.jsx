import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import image2 from './backgroungImage.jpeg'
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import InputField from './InputField';
import Slider from '../../elements/Slidereffect/Slidereffect';


export default function Sub() {

  return (
    <Box>
      {/* SMALL DEVICE */}
       {/* <Box sx={{   
            display: {xs: 'flex', md: 'none'},
            mt: 16,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
          <Box sx={{ 
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.51)',
          width: '70%',
          height: '160px',
          borderRadius: '30px 0',
          bottom: '0px',
          flexGrow: 1,
        }}>

      </Box>
            
            <Box style={{
               backgroundImage: `url(${image2})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: '100% 100%',
            }}
                sx={{ 
                width: '70%',
                height: '160px',
                background: 'rgba(0, 0, 0, 0.51)',
                borderRadius: '30px 0'
            }}>
              <Box sx={{
                position: 'absolute',
                left: 12,
                right: 12,
                zIndex: 2,
              }}>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '22px',
                  color: '#ffffff',
                  zIndex: 2,
                  textAlign: 'center',
                  marginTop: '17px'
              }} variant='h1'>
                  Subscribe to our newsletter
              </Typography>
                
                <Box sx={{ 
                  width: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 2,
                  zIndex: 2,
                }}>
                    <InputField content={{
                      label:'Enter Email',
                      color: '#ffffff',
                      }} />
                  <Box sx={{ 
                    my: 2,
                  }}>
                    <PrimaryButtons buttonLabel={'Join'} />
                  </Box>
                </Box>
              </Box>
                
            </Box>
        </Box>  */}

      {/* MEDIUM DEVICE */}
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
                    fontWeight: '700',
                    fontSize: {xs: '18px', md: '45px'},
                    lineHeight: {xs: '24px', md: '53px'},
                    color: '#262626',
                    textAlign: 'center',
                }} variant='h1'>
                    Join Our Mail list
                </Typography>
              }/>
                 
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: {xs: '12px', md: '18px'},
                    lineHeight: {xs: '18px', md: '24px'},
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
                      marginRight: '10px',
                    }}>
                      <PrimaryButtons buttonLabel={'Join'} />
                </Box>
                </Box>
              </Box>
               
            </Box>
        </Box>
  );
}