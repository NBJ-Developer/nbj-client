import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';

function ServiceSummary() {
  return (
    <Box sx={{
      width: '100%'
    }}>


      {/* MEDIUM DEVICE */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 16,
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          px: 6,
        }}>
          <Box sx={{
            maxWidth: '60vw',
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '18px',
              lineHeight: '24.51px',
              color: '#000000',
              textAlign: 'justify'
            }}>
            Ground support service is n integral part of airline operations and a prominent role as we are tasked with ensuring the safety and comfort of the passengers
            as they prepare for take-off and landing. NBJ’s highly skilled ground handlers  are fully equipped to provide these range of services to the flight on ground.
           Our dedicated team is ready to provide to provide efficient ground support
            and assist guests and passengers with any flight related arrangement.
            </Typography>
          </Box>
            <Paper elevation={3} sx={{
              position: 'sticky',
              top: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              ml: '3vw',
              py: 3,
              width: '30vw',
              height: '30vh',
              background: '#ffffff',
            }}>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontWeight: '600',
                fontSize: '2.5vw',
                lineHeight: '2.5vw',
                color: '#000000',
                textAlign: 'justify',
              }}>
                Need this Service?
              </Typography>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '1.5vw',
                lineHeight: '2.5vw',
                color: '#000000',
                textAlign: 'justify',
              }}>
                Get in touch with us.
              </Typography>
              <PrimaryButtons buttonLabel={'Button'} />
            </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceSummary