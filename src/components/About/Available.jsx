import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import PrimaryButtons from '../../elements/Button/PrimaryButtons'

function Available() {
  return (
    <div>
      <Box sx={{
            mt: 20,
            position: 'relative',
          }}>
      <Box
          component="img"
          sx={{
            position: 'absolute',
            bottom: 0,
            display: 'block',
            overflow: 'hidden',
          }}
          src={'available.png'}
          alt={'available.png'}
            />
        <Box sx={{
            mt: 30,
            height: '43vh',
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            backgroundColor: '#2B47A1',
          }}>
          <Box sx={{
            mr: 8,
            width: '60%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Box>
              <Typography sx={{
                textAlign: 'center',
                color: '#ffffff',
                Font: 'Open Sans',
                fontWeight: '400px',
                fontSize: '40px',
              }}>
              We are available<br/>
              <span className='span2'>
                24/7
              </span>
              <br />
              for your best travel experience
              </Typography>  
            </Box>
            <Box>
              <PrimaryButtons buttonLabel={'Explore'}/>
            </Box> 
          </Box>
         
        </Box>
        
      </Box>
    </div>
  )
}

export default Available
