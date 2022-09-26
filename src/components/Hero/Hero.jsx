import * as React from 'react';
import Box from '@mui/material/Box';
import './Hero.css'
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import Line from '../../assets/images/Line_Horizontal.png'
import Line2 from '../../assets/images/Line_Vertical.png'
import Avatar from '../../assets/images/Vector.png'

export default function Hero() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box
        sx={{ display: { xs: 'block', md: 'none' },
              width: '100%',
              height: '390px',
              backgroundColor: 'primary.dark',
              background: 'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)', 
              paddingTop: '20px',
              // marginTop: '109px'
        }}>

        <Box
          sx={{ width: '72vw',
                height: '300px',
                backgroundColor: '#d9d9d9',
                borderRadius: '0 30px 30px 0',
                paddingLeft: '30px',
                paddingTop: '10px'
          }}>
            <div className='hero_text_mobile'>
              <p className='big_text_mobile'>Big Text Header 2 lines</p>
              <p className='lorem_mobile'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <ContainedButtonsMB />
            <img src={Line} alt="" className='line' />

            <Box sx={{  
                        position: 'absolute',
                        left: '42%',
                        top: '60%'
                      }}>
              <img src={Avatar} alt="" className='avatar_mobile' />
            </Box>
        </Box>
        <Box sx={{  position: 'absolute',
                    left: '9%',
                    top: '73%'
                  }}>
          <img src={Avatar} alt="" className='avatar_mobile' />
        </Box>

        <Box sx={{  position: 'absolute',
                    left: '38%',
                    top: '82%'
                  }}>
          <img src={Avatar} alt="" className='avatar_mobile' />
        </Box>
      </Box>

      {/* MEDIUM DEVICE */}
     <Box sx={{  display: { xs: 'none', md: 'block' },
                  width: '100%',
                  height: '734px',
                  backgroundColor: 'primary.dark',
                  background: 'linear-gradient(to right,  #ffffff 0%,#ffffff 25%,#000000 25%,#000000 100%)',
                  paddingTop: '10px',
                  marginBottom: '50px',
                  // marginTop: '158px'
                  
        }}>

          <Box sx={{  display: 'flex',
                    width: '63vw',
                    height: '575px',
                    background: '#ffffff',
                    border: '1px solid #000000',
                    borderRadius: '0 43px 43px 0',
                    padding: '40px 0 0 80px'
            }}>
            <Box className='hero_text_web'>
              <h1 className='big_text_web'>Big Text Header </h1>
              <h2 className='big_text_web_2'>2 lines</h2>
              <p className='lorem_web'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et augue ante tellus non leo. </p>
              <ContainedButtonsMB />
            </Box>
            

            <Box>
              <img src={Line2} alt="" className='line_2' />
            </Box> 

            <Box>
              <div className='avatar_1'>
                <img src={Avatar} alt="" className='avatar_web' />
              </div>
              <div className='avatar_2'>
                <img src={Avatar} alt="" className='avatar_web' />
              </div>
              <div className='avatar_3'>
                <img src={Avatar} alt="" className='avatar_web' />
              </div>
            </Box>
          </Box>
      </Box>
      
    </Box>
  );
}