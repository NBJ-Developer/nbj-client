import * as React from 'react';
import Box from '@mui/material/Box';
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import Typography from '@mui/material/Typography';
import image from './airplain3.png'
import PrimaryButtons from '../../elements/Button/PrimaryButtons';


export default function Sub() {

  return (
    <Box>
      {/* SMALL DEVICE */}
       <Box sx={{   
            display: {xs: 'flex', md: 'none'},
            justifyContent: 'center',
        }}>
            <Box sx={{ 
                width: '80%',
                background: 'rgba(217, 217, 217, 0.5)',
                marginTop: '56px',
                borderRadius: '30px 0'
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#000000',
                    textAlign: 'center',
                    marginTop: '17px'
                }} variant='h1'>
                    Subscribe to our newsletter
                </Typography>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <input type="email" 
                        placeholder='Enter Email' 
                        style={{
                           width: '90%',
                           height: '32px',
                           border: 'none',
                           background: '#D9D9D9',
                           borderRadius: '7px',
                           margin: '18px 0 8px 0',
                           padding: '12px 12px', 
                           '&:focus': {
                            outline: 'none'
                           }
                        }}
                        required
                    />
                </Box>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    paddingBottom: '20px'
                }}>
                    <ContainedButtonsMB />
                </Box>
            </Box>
        </Box> 

      {/* MEDIUM DEVICE */}
       <Box sx={{   
            display: {xs: 'none', md: 'flex'},
            marginTop: '119px',
            justifyContent: 'center'
        }}>
            <Box style={{
               backgroundImage: `url(${image})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: '100% 100%',
            }} 
            sx={{ 
              mt: 8, 
              width: '60vw',
              borderRadius: '50px 0',
            }}>
              <Box sx={{ 
              width: '100%',
              py: 2,
              borderRadius: '50px 0',
              background: 'rgba(0, 0, 0, 0.51)',
            }}>
                 <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '33px',
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: '30px'
                }} variant='h1'>
                    Never miss out on our offers
                </Typography>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: '10px'
                }}>
                    Subscribe to our newsletter to get all the updates you love, <br /> we promise not to spam you.
                </Typography>
                <Box sx={{  
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px'
                }}>
                    <input 
                      type="email"
                      required  
                      placeholder='Enter Email' 
                      style={{
                      width: '60%',
                      height: '41px',
                      border: 'none',
                      background: ' rgba(255, 255, 255, 0.65)',
                      borderRadius: '20px 0 0 0',
                      margin: '8px 0',
                      padding: '12px 12px', 
                      '&:focus': {
                        outline: 'none'
                      }
                    }} 
                    />
                    <Box sx={{ 
                      marginRight: '10px',
                    }}>
                        <PrimaryButtons buttonLabel={'Button'} />
                    </Box>
                </Box>
              </Box>
               
            </Box>
        </Box>
      
    </Box>
  );
}