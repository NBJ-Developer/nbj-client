import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '../../elements/Accordion/Accordion'
import bigimage from '../../assets/images/BBVector.png'
import React from 'react'

function Question() {
  return (
    <Box sx={{
      display:{xs:'block', md:'flex'},
      backgroundColor:'#121212',
      marginTop:'80px',
    }}>
      <Box sx={{
        width:{xs:'100%', md:'50%'},
        padding:'80px 80px 0px 80px',
      }}>
        <Typography sx={{
            marginTop:'30px',
            fontFamily:'raleway',
            color:'#FFFFFF',
            fontWeight:'700',
            fontSize:{xs:'19px', md:'32px'},
            lineHeight:{xs:'22.31px', md:'37.57px'},
            }}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <Typography sx={{
            marginTop:'10px',
            color:'#FFFFFF',
            fontSize:{xs:'15px', md:'18px'},
            lineHeight:{xs:'20.43px', md:'27.21px'},
            letterSpacing:{xs:'1%', md:'2%'},
            }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Accumsan vestibulum erat in gravida orci cursus enim. Elit 
          elementum augue tortor nec porttitor lorem ut. Nunc sodales.
        </Typography>
        <Box sx={{
          width:{xs:'25%', md:'50%px'},
          height:{xs:'25%', md:'45%'},
          display:{xs:'none', md:'block'},
          margin:'80px',
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
      </Box>
      <Box sx={{
        width:{xs:'100%', md:'50%'},
        padding:'40px 40px',
      }}>
        <Accordion />
        <Accordion />
        <Accordion />
      </Box>
    </Box>
  )
}

export default Question
