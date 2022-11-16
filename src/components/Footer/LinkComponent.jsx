import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

function LinkComponent({item}) {
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
        <Link to='/' style={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: {xs: 400, md: 700},
          fontSize: {xs: '14px', md: '20px'},
          lineHeight: '23px',
          color: '#ffffff',
          textDecoration: 'none'
        }}>
          {item}
        </Link>
        <Box sx={{
          display: {xs: 'none', md: 'block'},
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
