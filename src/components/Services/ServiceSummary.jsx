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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies
              malesuada urna faucibus consectetur neque, a tristique aenean. Velit egestas semper
              interdum massa condimentum imperdiet vulputate. Laoreet suspendisse nulla sem sed
              fusce. Enim, sit euismod proin egestas fames dui. Mi cursus enim, interdum bibendum
              scelerisque tincidunt egestas. Dolor mattis diam at non libero ut. Amet sed volutpat
              pharetra placerat lacinia convallis dignissim est. Lacinia dis porta ac dui. Vestibulum
              amet elementum ultrices feugiat pulvinar. Arcu urna posuere a sit. Tellus sit sollicitudin
              integer pretium metus semper mus iaculis. Augue laoreet tincidunt elit nunc rhoncus
              bibendum diam. Diam sapien, vel, volutpat ligula eu, a vestibulum. Quis rhoncus, tincidunt
              mattis dis nec.
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