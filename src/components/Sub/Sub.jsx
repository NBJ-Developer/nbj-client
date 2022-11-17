import * as React from 'react';
import Box from '@mui/material/Box';
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import Typography from '@mui/material/Typography';
import image2 from './backgroungImage.jpeg'
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import InputField from './InputField';


export default function Sub() {

  return (
    <Box>
      {/* SMALL DEVICE */}
       <Box sx={{   
            display: {xs: 'flex', md: 'none'},
            mt: 10,
            justifyContent: 'center',
        }}>
            <Box style={{
               backgroundImage: `url(${image2})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: '100% 100%',
            }}
                sx={{ 
                width: '60%',
                background: 'rgba(0, 0, 0, 0.51)',
                marginTop: '56px',
                borderRadius: '30px 0'
            }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '22px',
                    color: '#ffffff',
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
            mt: 30,
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
                 <Typography sx={{
                    fontWeight: '700',
                    fontSize: '45px',
                    lineHeight: '53px',
                    color: '#262626',
                    textAlign: 'center',
                }} variant='h1'>
                    Join Our Mail list
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#262626',
                    textAlign: 'center',
                    marginTop: '10px'
                }}>
                   Receive updates on our services and promotions straight to your inbox.
                </Typography>
                <Box sx={{ 
                  width: '100%', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 2,
                }}>
                    <InputField label={'Your Name'}/>
                    <InputField label={'Email Address'}/>
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