import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MediaCard from '../../elements/MediaCard'

function TopDestination() {
  return (
    <Box sx={{
      margin:'40px',
    }}>
      <Typography variant='h5' element='h5'>
        TOP DESTINATION
      </Typography>
      <Typography variant='body1' sx={{
        width:'50%',
        marginY:'15px',
      }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus aliquam 
      mi, morbi congue massa semper tempor mauris orci. Vulputate at tincidunt 
      dapibus in eu purus elit risus.
      </Typography>
      <Box>
        <MediaCard />
      </Box>
    </Box>
  )
}

export default TopDestination
