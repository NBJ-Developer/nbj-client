import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import bigimage from '../../assets/images/BBVector.png'
import smallImage from '../../assets/images/BBVector_small.png'
import './AboutUs.css'

function AboutUs() {
  return (
    <Box sx={{
      marginTop:'45px',
      display:'flex',
      position:'relative',
      width:'90%',
      flexDirection:{md:'row', xs:'column'},
      backgroundColor: '#121212',
      color:'#FFFFFF',
      height:{xs:'580px', md:'635px'},
      borderRadius:'0 30px 30px 0',
    }}>
      <Box sx={{
        marginLeft:{xs:'30px', md:'100px'},
        marginTop:{xs:'22px', md:'158px'},
        marginRight:'22px',
        height:{xs:'50%',},
        width:{md:'50%'},
      }}>
        <Typography sx={{
          fontFamily:'raleway',
          fontWeight:'700',
          fontSize:{xs:'19px', md:'32px'},
          lineHeight:{xs:'22.31px', md:'37.57px'},
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
        paddingTop:{xs:'30px', md:'20px'},
        marginLeft:'20px',
        width:'50%',
      }}>
        <Box sx={{
          position:'absolute',
          width:{xs:'33%', md:'25%'},
          height:{xs:'25%', md:'33%'},
          top:{xs:'73%', md:'37%'},
        }}>
          <img
            src={bigimage}
            srcSet={bigimage}
            alt='BigImage'
            loading="lazy"
            width='100%'
            height='100%'
          />
        </Box>
        <Box sx={{
          position:'absolute',
          width:{xs:'23%', md:'15%'},
          height:{xs:'15%', md:'23%'},
          top:{xs:'65%', md:'17%'},
          right:{xs:'31%', md:'13%'},
        }}>
          <img
            src={smallImage}
            srcSet={smallImage}
            alt='BigImage'
            loading="lazy"
            width='100%'
            height='100%'
          />
        </Box>
        <Box sx={{
          position:'absolute',
          width:{xs:'23%', md:'15%'},
          height:{xs:'15%', md:'23%'},
          top:{xs:'85%', md:'67%'},
          right:{xs:'10%', md:'3%'},
        }}>
           <img
            src={smallImage}
            srcSet={smallImage}
            alt='BigImage'
            loading="lazy"
            width='100%'
            height='100%'
          />
        </Box>
         
      </Box>
    </Box>
  )
}

export default AboutUs
