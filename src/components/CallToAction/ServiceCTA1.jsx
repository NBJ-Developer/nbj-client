import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ServiceCTA1() {
  return (
    <Box sx={{
        width: '100%'
    }}>
        {/* SMALL DEVICE */}
        <Box sx={{
            display: { xs: 'flex', md: 'none'},
        }}>
        </Box>

        {/* MEDIUM DEVICE */}
      <Box sx={{
            display: { xs: 'none', md: 'flex'},
            justifyContent: 'center',
            marginTop: '140px'
        }}>
           <Box sx={{
                width: '90%',
                background: '#000000'
            }}>
                <Typography variant='h1' sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '48px',
                    lineHeight: '56px',
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: '85px'
                }}>
                    READY TO GET STARTED?
                </Typography>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '33px',
                    color: '#ffffff',
                    textAlign: 'center',
                    margin: '23px 0 100px 0'
                }}>
                    Book your first flight, Charter or get in touch
                </Typography>
            </Box> 
      </Box>
    </Box>
  )
}

export default ServiceCTA1