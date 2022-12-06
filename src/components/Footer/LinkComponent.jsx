import React from 'react'
import Box from '@mui/material/Box'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link'
import OurStory from '../About/OurStory'

function LinkComponent({item, index, itemsLength}) {
  return (
    <div>
      <Box sx={{
        mt: {xs: 1, md: 0},
        display: 'flex',
      }}>
        <Box sx={{
          display: {xs: 'block', md: 'none'},
          borderLeft: '3px solid #ffffff',
          height: '18px',
          mt: 0.35,
          mx: 2,
        }}/>
        <Link component={RouterLink} to='OurStory' sx={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: {xs: '400px', md: '700'},
          fontSize: {xs: '14px', md: '20px'},
          lineHeight: {xs: '16px', md: '24px'},
          color: '#ffffff',
          textDecoration: 'none'
        }}>
          {item}
        </Link>
        <Box sx={{
          display: {xs: 'none', md: index + 1 !== itemsLength? 'block': 'none'},
          borderLeft: '3px solid #ffffff',
          height: '18px',
          mt: 0.35,
          mx: 2,
        }}/>
      </Box>
      
    </div>
  )
}

export default LinkComponent
