import * as React from 'react';
import Box from '@mui/material/Box';
import './Hero.css'
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
//import ContainedButtons from '../../elements/Button/ContainedButtons';
import Line from '../../assets/images/Line_Horizontal.png'
import Line2 from '../../assets/images/Line_Vertical.png'
import Avatar from '../../assets/images/Vector.png'

export default function Hero() {
  return (
    <div>
      {/* SMALL DEVICE */}
      <Box
        sx={{ display: { xs: 'block', md: 'none' },
              width: '100%',
              height: '410px',
              backgroundColor: 'primary.dark',
              background: 'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)', 
              paddingTop: '20px'
        }}>

        <Box
          sx={{ width: '260px',
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
            <img src={Avatar} alt="" className='avatar' />
        </Box>

        <Box sx={{  margin: '30px 0 0 30px', }}>
          <img src={Avatar} alt="" />
        </Box>

        <Box sx={{ margin: '-25px 0 0 140px', }}>
          <img src={Avatar} alt="" />
        </Box>
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  display: { xs: 'none', md: 'block' },
                  width: '100%',
                  height: '700px',
                  backgroundColor: 'primary.dark',
                  background: 'linear-gradient(to right,  #ffffff 0%,#ffffff 30%,#000000 30%,#000000 100%)',
                  paddingTop: '10px',
                  marginBottom: '50px',
                  
        }}>

        <Box sx={{  display: 'flex',
                    width: '961px',
                    height: '567px',
                    background: '#ffffff',
                    border: '1px solid #000000',
                    borderRadius: '0 43px 43px 0',
                    padding: '50px 0 0 85px'
          }}>
            <Box className='hero_text_web'>
              <p className='big_text_web'>Big Text Header 2 lines</p>
              <p className='lorem_web'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et augue ante tellus non leo. </p>
              <ContainedButtonsMB />
            </Box>
            

            <Box>
              <img src={Line2} alt="" className='line_2' />
            </Box> 

            <Box>
              <div className='avatar_1'>
                <img src={Avatar} alt="" />
              </div>
              <div className='avatar_2'>
                <img src={Avatar} alt="" />
              </div>
              <div className='avatar_3'>
                <img src={Avatar} alt="" />
              </div>
            </Box>
 
        </Box>
      </Box>
      
    </div>
  );
}