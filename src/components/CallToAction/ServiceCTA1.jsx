import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ServiceCTA1() {
  return (
    <Box sx={{
        width: '100%'
    }}>

        {/* BOTH DEVICES */}
      <Box sx={{
            display: {xs: 'block', md: 'flex'},
            justifyContent: 'center',
            marginTop: {xs: '37px', md:'140px'}
        }}>
           <Box sx={{
                width: {xs: '100%', md:'90%'},
                background: '#000000'
            }}>
                <Typography variant='h1' sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: {xs: '600', md: '700'},
                    fontSize: {xs: '24px', md: '48px'},
                    lineHeight: {xs: '28px', md: '56px'},
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: {xs: 'none', md: '85px'},
                    paddingTop: {xs: '17px', md: 'none'},
                }}>
                    READY TO GET STARTED?
                </Typography>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: {xs: '16px', md: '24px'},
                    lineHeight: {xs: '22px', md: '33px'},
                    color: '#ffffff',
                    textAlign: 'center',
                    margin: {xs: '25px 0 0 0', md: '23px 0 100px 0'},
                    padding: {xs: '0 80px 50px 80px', md: 'none'}
                }}>
                    Book your first flight, Charter or get in touch
                </Typography>
            </Box> 
      </Box>
    </Box>
  )
}

export default ServiceCTA1