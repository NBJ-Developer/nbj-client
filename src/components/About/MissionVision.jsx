import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'

function MissionVision() {
  return (
    <Box>
      <Box sx={{
      display:{xs:'block', md:'flex'},
      paddingX:{xs:'30px', md:'100px'},
      marginY:{xs:'30px', md:'100px'},
      justifyContent:'space-between',
    }}>
        <Box sx={{
          maxWidth:{md:'30rem'},
          marginRight:'20px',
        }}>
          <Typography sx={{
            marginTop:'30px',
            fontFamily:'raleway',
            fontWeight:'700',
            fontSize:{xs:'19px', md:'32px'},
            lineHeight:{xs:'22.31px', md:'37.57px'},
            textAlign:{xs:'left', md:'center'},
            }}>
            VISION
          </Typography>
          <Typography sx={{
            marginTop:'10px',
            fontSize:{xs:'15px', md:'18px'},
            lineHeight:{xs:'20.43px', md:'27.21px'},
            letterSpacing:{xs:'1%', md:'2%'},
            textAlign:{md:'center'},
            }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis arcu 
          vulputate maecenas quis maecenas. Vehicula id dis amet, nunc, sit lorem.
          Pharetra sit felis elementum ultrices aliquet aliquam. Vitae eros cursus 
          venenatis dictum ut tincidunt.
          </Typography>
        </Box>
        <Box sx={{
          maxWidth:{md:'30rem'},
        }}>
          <Typography sx={{
            marginTop:'30px',
            fontFamily:'raleway',
            fontWeight:'700',
            fontSize:{xs:'19px', md:'32px'},
            lineHeight:{xs:'22.31px', md:'37.57px'},
            textAlign:{xs:'right', md:'center'},
            }}>
            MISSION
          </Typography>
          <Typography sx={{
            marginTop:'10px',
            fontSize:{xs:'15px', md:'18px'},
            lineHeight:{xs:'20.43px', md:'27.21px'},
            letterSpacing:{xs:'1%', md:'2%'},
            textAlign:{ md:'center'},
            }}>
          Lorem ipsum dolor sit amet, consectetur adipi elit. Turpis arcu 
          vulputate maecenas quis maecenas. Vehicula id dis amet, nunc, sit lorem.
          Pharetra sit felis elementum ultrices aliquet aliquam. Vitae eros cursus 
          venenatis dictum ut tincidunt.
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'30px',
        paddingX:'70px',
        }}>
        <Box sx={{
          backgroundColor:'#D9D9D9',
          boxShadow:'#000000 25%',
          marginBottom:'20px',
          padding:{xs:'2rem', md:'2.5rem'},
          borderRadius:{xs:'10px', md:'15px'},
          maxWidth:'30rem',
        }}>
          <Typography>
            + 89 Flights
            Across the world 
          </Typography>
        </Box>
        <Box sx={{
          backgroundColor:'#D9D9D9',
          boxShadow:'#000000 25%',
          marginBottom:'20px',
          padding:{xs:'2rem', md:'2.5rem'},
          borderRadius:{xs:'10px', md:'15px'},
          maxWidth:'30rem',
        }}>
          <Typography>
            + 89 Flights
            Across the world 
          </Typography>
        </Box>
        <Box sx={{
          backgroundColor:'#D9D9D9',
          boxShadow:'#000000 25%',
          marginBottom:'20px',
          padding:{xs:'2rem', md:'2.5rem'},
          borderRadius:{xs:'10px', md:'15px'},
          maxWidth:'30rem',
        }}>
          <Typography>
            + 89 Flights
            Across the world 
          </Typography>
        </Box>
      </Box>
    </Box>
    
  )
}

export default MissionVision
