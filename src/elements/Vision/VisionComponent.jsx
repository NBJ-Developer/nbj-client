import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

function VisionComponent({contents}) {
  console.log(contents)
  return (
    <div>
      <Box sx={{
      display:{xs:'block', md:'flex'},
      paddingX:{xs:'30px', md:'100px'},
      mt: 6,
      mb: 16,
      justifyContent:'space-between',
    }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth:{md:'25rem'},
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            width: '160px',
            height: '160px',
            }}>
              <Typography sx={{
                fontFamily:'raleway',
                fontWeight:'700',
                fontSize:{xs:'19px', md:'32px'},
                lineHeight:{xs:'22.31px', md:'37.57px'},
                textAlign: 'center',
              }}>
                {contents.label}
              </Typography>
          </Box>
          <Typography sx={{
            marginTop:'10px',
            color: '#ffffff',
            fontSize:{xs:'15px', md:'18px'},
            lineHeight:{xs:'20.43px', md:'27.21px'},
            wordSpacing: '-2px',
            textAlign:'justify',
            }}>
            {contents.body}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default VisionComponent
