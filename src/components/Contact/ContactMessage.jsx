import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputField from '../Sub/InputField';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';


function ContactMessage() {

  return (
    <Box sx={{
      mt: {xs: 12, md: 16},
      maxWidth: '100%'
    }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '90%', md: '75%'},
            backgroundColor: '#ffffff',
            borderRadius: 2,
            p: 4,
          }}>
            <Box>
              <Typography variant='h6' sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '27px',
              color: '#000000',
              ml: 2,
            }}>
              Send a message
            </Typography>

            {/* FORM */}
            <Box sx={{ 
              width: '100%', 
              display: 'flex',
              flexDirection: 'column',
              p: 2,
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
              <InputField content={{
              label:'Subject',
              color: '#06133C',
              }}/>
              <InputField content={{
              label:'Message',
              color: '#06133C',
              row: 6,
              }}/>
              <Box sx={{ 
                marginRight: '10px',
              }}>
                <PrimaryButtons buttonLabel={'Button'} />
              </Box>
            </Box>
            </Box>
            
            <Box 
                component="img"
                width={'65%'}
                src={'submit-message-animation.gif'}
                alt={'submit-message-animation'}
                sx={{
                  width:{xs: '65vw', md: '60%'},
                  height:'auto',
              }}>     
          </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default ContactMessage