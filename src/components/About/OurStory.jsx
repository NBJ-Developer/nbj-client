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
        justifyContent: 'space-between',
        marginTop: '60px',
        width: '80%',
        height: '70vh',
        backgroundColor: '#ffffff',
        borderRadius: '0px 30px 30px 0px',
      }}>
        <Box>
          <Box sx={{
            display: 'flex',
            width: '95%',
            p: 3,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '23px',
              paddingTop: '22px',
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
              margin: '22px 0px 0 0',
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
            mt: 2,
            height: '70%',
            width: '100%',
            display: 'block',
            overflow: 'hidden',
          }}
          src={ourStoryProps.image}
          alt={ourStoryProps.image}
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
            background: '#ffffff',
            borderRadius: ourStoryProps.display? '0px 5px 5px 0px': '0px 40px 40px 0px',
            width: '60%',
            height: ourStoryProps.display?'63vh': '57vh',
            px: 4,
          }}>
          <Box sx={{
            paddingTop: '70px',
            color: '#434343'
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '32px',
              lineHeight: '38px',
            }} variant='h1'>
              {ourStoryProps.heading} <span className='span1'>{ourStoryProps.heading1}</span>
            </Typography>
          </Box>

          <Box sx={{
            marginY: '40px',
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '23px',
              color: '#434343',
              textAlign: 'justify'
            }}>
              {ourStoryProps.content}
            </Typography>
          </Box>
          <Box sx={{ 
            marginBottom: '70px',
            marginTop: '20px',
            display: ourStoryProps.display? 'block': 'none',
          }}>
            <ContainedButtons buttonLabel={'Button'}/>
          </Box>
        </Box>

        <Box
          component="img"
          sx={{
            maxHeight: ourStoryProps.display? '62.8vh': '50.5vh',
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