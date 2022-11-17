import * as React from 'react';
import Box from '@mui/material/Box';
import { BsArrowRightCircle } from 'react-icons/bs'
import ContainedButtons from '../../elements/Button/PrimaryButtons';
import Typography from '@mui/material/Typography';


export default function OurStory({ourStoryProps}) {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{
          display: {xs: 'flex', md: 'none'},
          flexDirection: 'column',
          mt: 6,
        }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          backgroundColor: '#ffffff',
          borderRadius: '0px 30px 30px 0px',
          p: 3,
        }}>
          <Box sx={{
            display: 'flex',
            width: '80%',
            px: 3,
            pb: 3,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '23px',
            }} variant='h1'>
              {ourStoryProps.heading}
              <span className='span1'>
               {ourStoryProps.heading1}
              </span>
            </Typography>
            <BsArrowRightCircle style={{
              fontWeight: '700',
              fontSize: '20px',
              color: '#F9A020',
            }} />
            
          </Box>
          <Typography sx={{
            px: 3,
            textAlign: 'justify',
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '20px',
          }}>
            {ourStoryProps.content}
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            height: '70%',
            width: '90%',
            overflow: 'hidden',
            borderRadius: '0px 30px 30px 0px',
          }}
          src={ourStoryProps.airplain5}
          alt={ourStoryProps.airplain5}
            />
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        width: '75%',
        maxHeight: '65.5vh',
        marginTop: '139px',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ffffff',
          borderRadius: ourStoryProps.display? '0px 5px 5px 0px': '0px 40px 40px 0px',
          width: '60%',
          minHeight: ourStoryProps.display?'63vh': '57vh',
          p: 3,
          }}>
          <Box>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '28px',
              lineHeight: '23px',
            }} variant='h1'>
              {ourStoryProps.heading} <span className='span1'>{ourStoryProps.heading1}</span>
            </Typography>
          </Box>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '23px',
              color: '#434343',
              textAlign: 'justify',
              mt: 4,
            }}>
              {ourStoryProps.content}
            </Typography>
          <Box sx={{ 
            display: ourStoryProps.display? 'block': 'none',
          }}>
            <ContainedButtons buttonLabel={'Button'}/>
          </Box>
        </Box>

        <Box
          component="img"
          sx={{
            height: ourStoryProps.display? '62.8vh': '50.5vh',
            display: 'block',
            overflow: 'hidden',
          }}
          src={ourStoryProps.image}
          alt={ourStoryProps.image}
            />
      </Box>
    </Box>
  );
}