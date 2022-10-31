import * as React from 'react';
import Box from '@mui/material/Box';
import { BsArrowRightCircle } from 'react-icons/bs'
import Wvector from '../../assets/images/BBVector.png'
import ContainedButtons from '../../elements/Button/PrimaryButtons';
import Typography from '@mui/material/Typography';


export default function OurStory() {
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
              OUR
              <span className='span1'>
                STORY
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A et in 
            lectus ornare pellentesque mattis morbi placerat. Feugiat elementum 
            orci lacus.
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
          src={'airplain5.png'}
          alt={'airplain5.png'}
            />
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  
        display: {xs: 'none', md: 'block'},
        width: '75%',
        maxHeight: '71.5vh',
        background: '#ffffff',
        borderRadius: '0px 40px 40px 0px',
        marginTop: '139px',
        paddingLeft: '80px',
      }}>
        <Box sx={{  
          display: 'flex',
        }}>
          <Box sx={{
              width: '50%',
              mr: 4,
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
                OUR <span className='span1'>STORY</span>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor lacus 
                pellentesque pretium sed. Non dictum pretium id fringilla. Habitasse ipsum 
                lectus a nunc elementum. Hac et vitae odio gravida feugiat. Nisl pharetra 
                vestibulum sit arcu phasellus lacus, pellentesque. Nulla pharetra duis mauris 
                lorem ut hendrerit mauris nunc. Orci eget convallis volutpat imperdiet nulla 
                at odio iaculis. Lorem id odio netus bibendum. Arcu odio porttitor quis gravida 
                quis sollicitudin iaculis amet. Tempus, vitae quis dignissim nisl tellus auctor. 
                Sem mauris, vel suspendisse quis mattis dignissim.
              </Typography>
            </Box>
            <Box sx={{ 
              marginBottom: '70px',
              marginTop: '20px'
            }}>
              <ContainedButtons buttonLabel={'Button'}/>
            </Box>
          </Box>

          <Box
            component="img"
            sx={{
              height: '71.5vh',
              display: 'block',
              overflow: 'hidden',
            }}
            src={'airplain2.png'}
            alt={'airplain2.png'}
              />
        </Box>
      </Box>
    </Box>
  );
}