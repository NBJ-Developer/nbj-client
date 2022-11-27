import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '../../elements/Accordion/Accordion'
import contactBG from '../../pages/Contact/contactBG.png'


function Question() {
  return (
    <Box sx={{
      display:{xs:'block', md:'flex'},
      backgroundImage: `url(${contactBG})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      mt: 16,
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        backgroundColor: 'rgba(32, 53, 120, 0.6)' ,
      }}>
        <Box sx={{
        width:{xs:'100%', md:'50%'},
        px:{xs: 4, md: 8,},
        py:{xs: 2, md: 4,},
      }}>
        <Typography sx={{
            fontFamily:'raleway',
            color:'#FFFFFF',
            fontWeight:'700',
            fontSize: '4vh',
            lineHeight: '4vh',
            }}>
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <Typography sx={{
          fontFamily: 'inter',
            marginTop: 3,
            color:'#FFFFFF',
            fontSize:{xs:'15px', md:'2.8vh'},
            lineHeight:{xs:'20.43px', md:'3vh'},
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
            width:{xs: '40vw', md: '20vw',},
            height:'auto',
        }}>     
          </Box>
      </Box>
      <Box sx={{
        width:{xs:'100%', md:'50%'},
        px:{xs: 4, md: 8,},
        py:{xs: 2, md: 4,},
        marginTop:{md:'70px'}
      }}>
        <Accordion />
        <Accordion />
        <Accordion />
      </Box>
      </Box>
      
    </Box>
  )
}

export default Question
