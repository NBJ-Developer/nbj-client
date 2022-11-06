import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import React from 'react'

function VisionPapper({ contents }) {
  return (
    <div>
      <Paper sx={{
        maxWidth: '20vw',
        }}>
        <Box sx={{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        py: 4,
        px: 6,
        }}>
          <img
            height={20}
            width={20}
            src = {contents.image}
            alt = {contents.image}
          />
            <Typography sx={{
              textAlign: 'center',
            }}>
              {contents.label} <br/>
              {contents.body} 
            </Typography>
          </Box>
        </Paper>
    </div>
  )
}

export default VisionPapper
