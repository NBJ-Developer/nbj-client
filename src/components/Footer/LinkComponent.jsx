import React from 'react'
import Box from '@mui/material/Box'

function LinkComponent({item, sectionId, link, index, itemsLength}) {
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
          <a href={sectionId? `#${sectionId}`: `http://localhost:3000/${link}`} style={{
          fontFamily: 'Raleway',
          fontWeight: '700',
          fontSize: '1.5vw',
          lineHeight: {xs: '16px', md: '24px'},
          color: '#ffffff',
          textDecoration: 'none'
          }}>
            {item}
          </a>
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
