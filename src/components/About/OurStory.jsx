import * as React from 'react';
import Box from '@mui/material/Box';
import './OurStory.css'
import { BsArrowRightCircle } from 'react-icons/bs'
import Wvector from '../../assets/images/BBVector.png'
import ContainedButtons from '../../elements/Button/ContainedButtons';


export default function OurStory() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{  display: {xs: 'block', md: 'none'},
                  marginTop: '63px',
                  width: '75vw',
                  height: '418px',
                  backgroundColor: '#000000',
                  borderRadius: '0px 30px 30px 0px',
                  paddingLeft: '30px'
                }}>
        <div className='div_story'>
          <h1 className='ours'> OUR <span className='inner_story'>STORY</span> </h1>
          <BsArrowRightCircle className='bs_icon' />
        </div>

        <div className='div_lorem'>
          <p className='p_Lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh at sit ut ultricies.</p>
        </div>

        <Box sx={{  position: 'absolute',
                    left: '42.67%',
                    top: '187%'
                  }}>
              <img  src={Wvector} 
                    alt="" 
                    srcSet={Wvector}
                    loading='lazy'
                    className='w_vector_1'
                    />
        </Box>

        <Box sx={{  width: '39vw',
                    height: '150px',
                    backgroundColor: '#121212',
                    borderRadius: '25px',
                    position: 'absolute',
                    left: '10%',
                    top: '190%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'       
                  }}>
          <img  src={Wvector} 
                alt="" 
                srcSet={Wvector}
                loading='lazy'
                className='w_vector_2'/>
        </Box>

        <Box sx={{  position: 'absolute',
                    left: '48%',
                    top: '214%',
                  }}>
              <img  src={Wvector} 
                    alt="" 
                    srcSet={Wvector}
                    loading='lazy'
                    className='w_vector_1'/>
        </Box>
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  display: {xs: 'none', md: 'block'},
                  width: '78%',
                  height: '552px',
                  background: '#000000',
                  borderRadius: '0px 30px 30px 0px',
                  marginTop: '139px',
                  paddingLeft: '80px'
                }}>
          <Box sx={{  display: 'flex',
                      justifyContent: 'space-between'
                    }}>
            <div className='story_div_1'>
              <div className='div_story_web'>
                <h1 className='our_web'>OUR <span className='inner_story'>STORY</span> </h1>
              </div>

              <div className='div_lorem_web'>
                <p className='p_lorem_web'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor lacus pellentesque pretium sed. Non dictum pretium id fringilla. Habitasse ipsum lectus a nunc elementum. Hac et vitae odio gravida feugiat. Nisl pharetra vestibulum sit arcu phasellus lacus, pellentesque. Nulla pharetra duis mauris lorem ut hendrerit mauris nunc. Orci eget convallis volutpat imperdiet nulla at odio iaculis. Lorem id odio netus bibendum. Arcu odio porttitor quis gravida quis sollicitudin iaculis amet. Tempus, vitae quis dignissim nisl tellus auctor. Sem mauris, vel suspendisse quis mattis dignissim.
                </p>
              </div>
                <ContainedButtons />
            </div>

            <div className='story_div_2'>
              <Box sx={{  position: 'absolute',
                          top: '190%',
                          left: '63%'
                        }}>
                    <img  src={Wvector} 
                          alt="" 
                          srcSet={Wvector}
                          loading='lazy'
                          className='w_vector_web_1'/>
              </Box>

              <Box sx={{  width: '20%',
                          height: '306.94px',
                          backgroundColor: '#121212',
                          borderRadius: '25px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          top: '196%',
                          left: '45%'
                    
                        }}>
                    <img  src={Wvector} 
                          alt="" 
                          srcSet={Wvector}
                          loading='lazy'
                          className='w_vector_web_2'/>
              </Box>

              <Box sx={{  position: 'absolute',
                          top: '240%',
                          left: '66%'
                      }}>
                <img  src={Wvector} 
                      alt="" 
                      srcSet={Wvector}
                      loading='lazy'
                      className='w_vector_web_1'/>
              </Box>
            </div>
          </Box>

      </Box>

    </Box>
  );
}