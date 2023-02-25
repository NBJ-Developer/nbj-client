import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';

function ServiceSummary({serviceSummary}) {
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
          flexDirection: {xs: 'column', md: 'row'},
          px: 6,
        }}>
          <Box sx={{
            maxWidth: {md:'60vw'},
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

              {serviceSummary}

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
              width: {md:'30vw'},
              mt: {xs: '25px', md: '0px'},
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
              <PrimaryButtons buttonLabel={'Button'} link={'Contact'} />
            </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceSummary