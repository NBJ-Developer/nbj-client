import * as React from 'react';
import Box from '@mui/material/Box';
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import Line from '../../assets/images/Line_Horizontal.png'
import Line2 from '../../assets/images/Line_Vertical.png'
import Avatar from '../../assets/images/Vector.png'
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box
        sx={{ 
          display: { xs: 'block', md: 'none' },
          width: '100%',
          backgroundColor: 'primary.dark',
          background: 'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)', 
          padding: '20px 0 85px 0',
          position: 'relative',
          color: '#000000'
          // marginTop: '109px'
        }}>

        <Box
          sx={{ 
            width: '72%',
            backgroundColor: '#d9d9d9',
            borderRadius: '0 30px 30px 0',
            padding: '10px 0 70px 30px',
          }}>
            <Box sx={{
              width: '90%',
              marginBottom: '40px',
              paddingTop: '15px'
            }}>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '28px',
                lineHeight: '132.4%',
                letterSpacing: '0.03em',
              }} variant='h1'>
                Big Text Header 2 lines
              </Typography>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '15px',
                lineHeight: '18px',
                letterSpacing: '0.03em',
                marginTop: '13px'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
            <ContainedButtonsMB />
            <img src={Line} 
              alt="" 
              className='line' 
              style={{
                marginLeft: '25px'
              }}
            />

            <Box sx={{  
              position: 'absolute',
              left: '42%',
              top: '66%'
            }}>
              <img src={Avatar} 
                alt="" 
                style={{
                  width: '100%',
                }} 
              />
            </Box>
        </Box>
        <Box sx={{  
          position: 'absolute',
          left: '9%',
          top: '86%'
        }}>
          <img src={Avatar} 
            alt="" 
            style={{
              width: '100%',
            }} 
          />
        </Box>

        <Box sx={{  
          position: 'absolute',
          left: '38%',
          top: '104%'
        }}>
          <img src={Avatar} 
            alt="" 
            style={{
              width: '100%',
            }} 
          />
        </Box>
      </Box>

      {/* MEDIUM DEVICE */}
     <Box sx={{  
      display: { xs: 'none', md: 'block' },
      position: 'relative',
      width: '100%',
      backgroundColor: 'primary.dark',
      background: 'linear-gradient(to right,  #ffffff 0%,#ffffff 25%,#000000 25%,#000000 100%)',
      paddingTop: '10px',
      paddingBottom: '100px',
      marginBottom: '50px',          
    }}>

        <Box sx={{  
          display: 'flex',
          width: '65%',
          background: '#ffffff',
          border: '1px solid #000000',
          borderRadius: '0 43px 43px 0',
          padding: '40px 0 50px 80px',
          color: '#000000',
        }}>
          <Box sx={{
            width: '55%',
            paddingRight: '30px'
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '40px',
              lineHeight: '132.4%',
              letterSpacing: '0.03em',
              paddingTop: '82px'
            }} variant='h1'>
              Big Text Header
            </Typography>

            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '40px',
              lineHeight: '132.4%',
              letterSpacing: '0.03em',
            }} variant='h2'>
              2 lines
            </Typography>

            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '24px',
              lineHeight: '28px',
              letterSpacing: '0.03em',
              margin: '30px 0 50px 0',
              textAlign: 'justify'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et augue ante tellus non leo. 
            </Typography>

            <ContainedButtonsMB />
          </Box> 

          <Box sx={{
            width: '2%'
          }}>
            <img src={Line2} alt="" className='line_2' />
          </Box> 

          <Box sx={{
            width: '43%',
            marginLeft: '20px'
          }}>
            <Box sx={{
              width: '9%',
              position: 'absolute',
              top: '13%',
              left: '39%'
            }}>
              <img src={Avatar} 
                alt="" 
                style={{
                  width: '100%'
                }}
              />
            </Box>
            <Box sx={{
              width: '9%',
              position: 'absolute',
              top: '33%',
              left: '50.5%'
            }}>
              <img src={Avatar} 
                alt="" 
                style={{
                  width: '100%'
                }}
              />
            </Box>
            <Box sx={{
              width: '9%',
              position: 'absolute',
              top: '58%',
              left: '44%'
            }}>
              <img src={Avatar} 
                alt="" 
                style={{
                  width: '100%'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}