import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import bigimage from '../../assets/images/BBVector.png'
import smallImage from '../../assets/images/BBVector_small.png'
import './AboutUs.css'
import { lineHeight } from '@mui/system'

function AboutUs() {
  return (
    <Box sx={{
      marginTop:'45px',
      display:'flex',
      flexDirection:{xs:'column', md:'row'},
      backgroundColor: '#121212',
      color:'#FFFFFF',
      width:'90%',
      height:{xs:'580px', md:'635px'},
      borderRadius:'0 30px 30px 0',
    }}>
      <Box sx={{
        width:{md:'50%'},
        marginLeft:{xs:'30px', md:'158px'},
        marginTop:{xs:'22px', md:'200px'},
        marginRight:'22px',
      }}>
        <Typography sx={{
          fontFamily:'raleway',
          fontWeight:'700',
          fontSize:{xs:'19px', md:'32px'},
          lineHeight:{xs:'22.31px', md:'37.57'},
        }}>
          ABOUT US
        </Typography>
        <Typography sx={{
          marginTop:'10px',
          fontSize:{xs:'15px', md:'18px'},
          lineHeight:{xs:'20.43px', md:'27.21px'},
          letterSpacing:{xs:'1%', md:'2%'}
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        In auctor lacus pellentesque pretium sed. Non dictum pretium id 
        fringilla. Habitasse ipsum lectus a nunc elementum. Hac et vitae 
        odio gravida feugiat. Nisl pharetra vestibulum sit arcu phasellus 
        lacus, pellentesque. Nulla pharetra duis mauris lorem ut hendrerit 
        mauris nunc. Orci eget convallis volutpat imperdiet nulla at odio 
        iaculis. Lorem id odio netus bibendum. Arcu odio porttitor quis 
        gravida quis sollicitudin iaculis amet. Tempus, vitae quis dignissim 
        nisl tellus auctor. Sem mauris, vel suspendisse quis mattis dignissim.
        </Typography>
      </Box>
      <Box sx={{
        position:'relative'
      }}>
        <Box sx={{
          position: 'absolute',
          top:'-130px',
          left:'40px',
        }}>
          <img
            src={bigimage}
            srcSet={bigimage}
            alt={'Big Image'}
            loading="lazy"
          />
        </Box>
        <Box sx={{
          position: 'absolute',
          bottom:'120px',
          right:'90px',
        }}>
          <img
            src={smallImage}
            srcSet={smallImage}
            alt={'Big Image'}
            loading="lazy"
          />
        </Box>
        <Box sx={{
          position: 'absolute',
          top:'-40px',
          right:'20px',
        }}>
           <img
            src={smallImage}
            srcSet={smallImage}
            alt={'Big Image'}
            loading="lazy"
          />
        </Box>
         
      </Box>
    </Box>
  )
}

export default AboutUs
