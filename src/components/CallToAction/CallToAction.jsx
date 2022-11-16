import * as React from 'react';
import Box from '@mui/material/Box';
import SecondaryButton from '../../elements/Button/SecondaryButton';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';


export default function CallToAction() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{  
        display: {xs: 'flex', md: 'none'},
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        background: '#2B47A1',
        marginTop: '50px',
        textAlign: 'center'
      }}>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#ffffff',
          pt: 3,
        }} variant='h1'>
          READY TO GET STARTED
        </Typography>
        <Typography sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '22px',
          textAlign: 'center',
          color: '#ffffff',
          py: 3,
        }}>
          Book a flight, charter, get a quote or get in touch?
        </Typography>
        <Box sx={{
          mb: 3,
        }}>
          <PrimaryButtons buttonLabel={'Contact Us'} />
        </Box>
          
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  
        display: {xs: 'none', md: 'block'},
        marginTop: '90px'
      }}>
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '100%',
          height: '450px',
          background: '#2B47A1',
          py: 5,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',  
            width: '50%',
            mx: 6,
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '32px',
              lineHeight: '38px',
              color: '#ffffff',
            }} variant='h1'>
              Have any questions?
            </Typography>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '25px',
              color: '#ffffff',
              marginTop: '10px'
            }}>
              Need clarifications on any of our services, Say hello!
            </Typography>

            <Link to="/" style={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '20px',
              color: '#FFFFFF',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}>
              <CallIcon sx={{
                mr: 1,
              }}/>  +234 8169003746
            </Link>

            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '27px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
            }}>
              <LocationOnIcon sx={{
                mr: 1,
              }}/> Plot 23, MMIA Road, Ikeja, Lagos
            </Typography>

            <Link to="/" style={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '27px',
              color: '#FFFFFF',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}>
              <MailOutlineIcon sx={{
                mr: 1,
              }}/>  nbjvipgroundhandling@gmail.com
            </Link>
            
            <Box sx={{ 
              marginTop: '34px'
            }}>
              <SecondaryButton buttonLabel={'Button'}/>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',  
            width: '50%',
            height: '325px',
            textAlign: 'center',
            py: 4,
            mr: 6,
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '42px',
              color: '#ffffff',
              mt: 4,
            }} variant='h1'>
              READY TO GET STARTED?
            </Typography>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '27px',
              color: '#ffffff',
              width: '60%',
              mt: 4,
            }}>
              Book a flight, charter, get a quote or get in touch
            </Typography>
                      
            <Box sx={{  
              display: 'flex',
              justifyContent: 'space-around',
              mt: 4
            }}>
              <SecondaryButton buttonLabel={'Button'}/>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}