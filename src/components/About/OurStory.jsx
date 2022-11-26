import * as React from 'react';
import Box from '@mui/material/Box';
import { BsArrowRightCircle } from 'react-icons/bs'
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import Typography from '@mui/material/Typography';
import Slider from '../../elements/Slidereffect/Slidereffect'


export default function OurStory({ourStoryProps}) {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{
          display: {xs: 'flex', sm: 'flex', md: 'none'},
          flexDirection: 'column',
          mt: 16,
        }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
          backgroundColor: '#ffffff',
          borderRadius: '0px 30px 0px 0px',
          p: {xs: 4, sm: 4,},
        }}>
          <Box sx={{
            display: 'flex',
            width: '100%',
            pb: 3,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Typography sx={{
              font: 'Open Sans',
              fontWeight: '600',
              fontSize: '27px',
              lineHeight: '42px',
              lineHeight: '23px',
            }}>
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
            font: 'Open Sans',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '25px',
            lineHeight: '20px',
            textAlign: 'justify',
          }}>
            {ourStoryProps.smallContent}
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: '80%',
            height: '300px',
            overflow: 'hidden',
          }}
          src={ourStoryProps.xsImage}
          alt={ourStoryProps.xsImage}
            />
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        width: '80%',
        maxHeight: '60.5vh',
        mt: 23,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ffffff',
          borderRadius: '0px 5px 5px 0px',
          width: '60%',
          height: '70.5vh',
          minHeight: ourStoryProps.display?'63vh': '57vh',
          p: 6,
          }}>
          <Box>
          <Slider slideComponent={
          <Typography sx={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: {sm: '28px', md:'30px'},
            lineHeight: {sm: '45px', md: '55px'},
            color: '#434343',
            }}>
              {ourStoryProps.heading} <span className='span1'>{ourStoryProps.heading1}</span>
            </Typography>
          }/>
            
          </Box>
          <Box>
            <Typography sx={{
              font: 'Open Sans',
              fontWeight: '400',
              fontSize: {sm: '13px', md: '14px'},
              lineHeight: {sm: '25px', md: '27px'},
              color: '#434343',
              textAlign: 'justify',
              mt: 4,
            }}>
              {ourStoryProps.content}
            </Typography>
          </Box>
            
          <Box sx={{ 
            mt: 4,
            display: ourStoryProps.display? 'block': 'none',
          }}>
            <PrimaryButtons buttonLabel={'Button'}/>
          </Box>
        </Box>

        <Box
          component="img"
          sx={{
            height: '70.5vh',
            display: 'block',
            overflow: 'hidden',
          }}
          src={ourStoryProps.mdImage}
          alt={ourStoryProps.mdImage}
            />
      </Box>
    </Box>
  );
}