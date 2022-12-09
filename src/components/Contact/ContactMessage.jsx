import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputField from '../Sub/InputField';
import emailjs from '@emailjs/browser';


function ContactMessage() {

  const form = React.useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm('service_z5lntx8', 'template_xcqlbaf', form.current, 'E-NFBC2xL_q21ferI')
      .then((result) => {
        console.log(result.text);
        window.location.reload()
      }, (error) => {
        console.log(error.text);
      });
  }

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
            <Box component='form' ref={form} onSubmit={handleSubmit} 
              sx={{ 
                width: '100%', 
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                mt: 2,
              }}
            >
              <InputField content={{
                label:'Your Name',
                color: '#06133C',
                name: 'user_name',
                }}
                />
              <InputField content={{
                label:'Email Address',
                color: '#06133C',
                name: 'user_email',
                }}/>
              <InputField content={{
              label:'Subject',
              color: '#06133C',
              name: 'subject',
              }}/>
              <InputField content={{
              label:'Message',
              color: '#06133C',
              name: 'message',
              row: 6,
              }}/>
              <Box component='button' label='Button' sx={{
                mt: 1, 
                width: {xs: '150px', md: '170px'},
                height: {xs: '30px', md: '40px'},
                backgroundColor: '#F9A020',
                fontFamily: 'inter',
                fontStyle: 'normal',
                fontSize: {xs: '15px', md: '20px'},
                color: '#ffffff',
                textTransform: 'Capitalize',
                border: 'none',
                borderRadius: '10px 0 10px 0',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                  color: '#F9A020',
                  border: '3px solid #F9A020',
                },
                }}>
                Send
              </Box>
            </Box>
            </Box>
            
            <Box 
                component="img"
                width={'65%'}
                src={'submit-message-animation.gif'}
                alt={'submit-message-animation'}
                sx={{
                  width:{xs: '40vw', md: '20vw',},
                  height:'auto',
              }}>     
          </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default ContactMessage