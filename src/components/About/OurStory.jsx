import * as React from 'react';
import Box from '@mui/material/Box';
import { BsArrowRightCircle } from 'react-icons/bs'
import Wvector from '../../assets/images/BBVector.png'
import ContainedButtons from '../../elements/Button/ContainedButtons';
import Typography from '@mui/material/Typography';


export default function OurStory() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{  
        display: {xs: 'block', md: 'none'},
        position:'relative',
        marginTop: '63px',
        width: '80%',
        height: '420px',
        backgroundColor: '#000000',
        borderRadius: '0px 30px 30px 0px',
        padding: '0 0 20px 30px',
      }}>
        <Box sx={{
          display: 'flex',
          width: '95%',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#ffffff' 
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
            <span style={{
              backgroundColor: '#d9d9d9',
              color: '#000000',
              borderRadius: '5px',
              padding: '1px',
              marginLeft: '5px'
            }}>
              STORY
            </span>
          </Typography>
          <BsArrowRightCircle style={{
            fontWeight: '700',
            fontSize: '20px',
            margin: '22px 26px 0 0',
          }} />
        </Box>

        <Box sx={{
          width: '85%',
          margin: '28px 0 50px 0',
        }}>
          <Typography sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '20px',
            color: '#ffffff',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh at sit ut ultricies.
          </Typography>

          <Box sx={{ 
            width: '28%', 
            position: 'absolute',
            left: '58%',
            top: '32%'
          }}>
            <img src={Wvector} 
              alt="" 
              srcSet={Wvector}
              loading='lazy'
              style={{
                width: '100%',
              }}
            />
          </Box>

          <Box sx={{  
            width: '53%',
            backgroundColor: '#121212',
            borderRadius: '25px',
            position: 'absolute',
            left: '15%',
            top: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'       
          }}>
            <img src={Wvector} 
              alt="" 
              srcSet={Wvector}
              loading='lazy'
              style={{
                width: '90%',
                margin: '10px'
              }}
            />
          </Box>

          <Box sx={{  
            width: '28%',
            position: 'absolute',
            left: '66%',
            top: '76%',
          }}>
            <img src={Wvector} 
              alt="" 
              srcSet={Wvector}
              loading='lazy'
              style={{
                width: '100%',
              }}
            />
          </Box>
        </Box>
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
                letterSpacing: '0.025em'
              }} variant='h1'>
                OUR
                <span className='span1'>
                  STORY
                </span>
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