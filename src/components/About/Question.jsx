import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '../../elements/Accordion/Accordion'
import React from 'react'

function Question() {
  return (
    <Box sx={{
      display:{xs:'block', md:'flex'},
      backgroundColor:'#253988',
      mt: 16,
    }}>
      <Box sx={{
        width:{xs:'100%', md:'50%'},
        padding:{xs: '20px', md: '80px 80px 0px 80px'},
      }}>
        <Typography sx={{
            fontFamily:'raleway',
            color:'#FFFFFF',
            fontWeight:'700',
            fontSize:{xs:'19px', md:'32px'},
            lineHeight:{xs:'22.31px', md:'37.57px'},
            }}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <Typography sx={{
          fontFamily: 'Open Sans',
            marginTop:'10px',
            color:'#FFFFFF',
            fontSize:{xs:'15px', md:'18px'},
            lineHeight:{xs:'20.43px', md:'27.21px'},
            textAlign:'justify',
            wordSpacing: '-2px',
            }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Accumsan vestibulum erat in gravida orci cursus enim. Elit 
          elementum augue tortor nec porttitor lorem ut. Nunc sodales.
        </Typography>
        <Box 
          component="img"
          src={'frequently-asked-question.gif'}
          alt={'submit-message-animation'}
          sx={{
            my: 4,
            width:{xs: '70vw', md: '50vw'},
            height:'auto',
            color: 'inherit',
        }}>     
          </Box>
      </Box>
      <Box sx={{
        width:{xs:'100%', md:'50%'},
        p: 2,
        marginTop:{md:'70px'}
      }}>
        <Accordion />
        <Accordion />
        <Accordion />
      </Box>
    </Box>
  )
}

export default Question
