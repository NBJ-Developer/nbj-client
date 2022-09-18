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
      <Box sx={{ display: {xs: 'block', md: 'none'},
                  marginTop: '63px',
                  width: '281px',
                  height: '418px',
                  backgroundColor: '#000000',
                  borderRadius: '0px 30px 30px 0px',
                  paddingLeft: '30px'
        }}>
        <div className='div_story'>
          <h1 className='our'>OUR <span className='inner_story'>STORY</span> </h1>
          <BsArrowRightCircle className='bs_icon' />
        </div>

        <div className='div_lorem'>
          <p className='p_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh at sit ut ultricies.</p>
        </div>

        <Box sx={{ marginTop: '23px',
                    marginLeft: '130px'
        }}>
          <img src={Wvector} alt="" className='w_vector_1'/>
        </Box>

        <Box sx={{  width: '142px',
                    height: '150px',
                    backgroundColor: '#121212',
                    borderRadius: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '5',
                    marginTop: '-70px',
                    marginLeft: '15px'
                    
            }}>
          <img src={Wvector} alt="" className='w_vector_2'/>
        </Box>

        <Box sx={{ marginTop: '11px',
                    marginLeft: '154px'
        }}>
          <img src={Wvector} alt="" className='w_vector_1'/>
        </Box>
      </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{display: {xs: 'none', md: 'block'},
                width: '1142px',
                height: '552px',
                background: '#000000',
                borderRadius: '0px 30px 30px 0px',
                marginTop: '139px',
                paddingLeft: '80px',
                marginBottom: '10px'
          }}>
          <Box sx={{ display: 'flex',
                      justifyContent: 'space-between'
            }}>
            <div>
              <div className='div_story_web'>
                <h1 className='our_web'>OUR <span className='inner_story'>STORY</span> </h1>
              </div>

              <div className='div_lorem_web'>
                <p className='p_lorem_web'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor lacus pellentesque pretium sed. Non dictum pretium id fringilla. Habitasse ipsum lectus a nunc elementum. Hac et vitae odio gravida feugiat. Nisl pharetra vestibulum sit arcu phasellus lacus, pellentesque. Nulla pharetra duis mauris lorem ut hendrerit mauris nunc. Orci eget convallis volutpat imperdiet nulla at odio iaculis. Lorem id odio netus bibendum. Arcu odio porttitor quis gravida quis sollicitudin iaculis amet. Tempus, vitae quis dignissim nisl tellus auctor. Sem mauris, vel suspendisse quis mattis dignissim.
                </p>
              </div>
              <ContainedButtons />
            </div>

            <div>
              <Box sx={{ marginTop: '21px',
                    marginRight: '128.11px'
                }}>
                <img src={Wvector} alt="" className='w_vector_web_1'/>
              </Box>

              <Box sx={{  width: '290.57px',
                    height: '306.94px',
                    backgroundColor: '#121212',
                    borderRadius: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '5',
                    marginTop: '-70px',
                    marginLeft: '-244.75px'
                    
                }}>
                <img src={Wvector} alt="" className='w_vector_web_2'/>
              </Box>

              <Box sx={{ marginTop: '42.51px',
                    marginLeft: '60px'
                }}>
                <img src={Wvector} alt="" className='w_vector_web_1'/>
              </Box>
            </div>
          </Box>

      </Box>

    </Box>
  );
}