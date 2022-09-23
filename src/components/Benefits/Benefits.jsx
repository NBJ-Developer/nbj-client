import * as React from 'react';
import Box from '@mui/material/Box';
import './Benefits.css'
import { BsCheck2Circle } from 'react-icons/bs'
import WVector from '../../assets/images/BBVector.png'

export default function Benefits() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{  display: { xs: 'block', md: 'none' },
                  marginTop: '170px'
                }}>
        <Box sx={{  display: 'flex',
                    justifyContent: 'center',
                }}>
          <Box
            sx={{     width: '83vw',
                      height: '175px',
                      backgroundColor: '#ffffff',
            }}>
            <h4 className='what_you'>WHAT YOU GET</h4>
            <div className='div_column'>
                <p className='div_column_text'><BsCheck2Circle className='check' /> Safety Priority</p>
                <p className='div_column_text'><BsCheck2Circle className='check' /> Customer Service & Comfort</p>
            </div>
            <div className='div_column_2'>
                <p className='div_column_text'><BsCheck2Circle className='check' /> Convenience & Flexibility</p>
                <p className='div_column_text'><BsCheck2Circle className='check' /> Convenience & Flexibility</p>
            </div>
          </Box>
        </Box>

        <Box sx={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
          <Box sx={{  width: '83vw',
                      height: '144px',
                      backgroundColor: '#000000',
                      borderRadius: '10px',
                      
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
            }}>
            <img src={WVector} alt="" className='w_vector' />
          </Box>
        </Box>
      </Box>

        {/* MEDIUM DEVICE */}
      <Box sx={{  display: {xs: 'none', md: 'block'}, 
                  marginTop: '83px'}}>

            <h4 className='you_get'>WHAT YOU GET</h4>
            <Box sx={{display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '43px'
              }}>
              <Box sx={{  display: 'flex',
                          alignItems: 'center',
                          width: '90vw',
                          height: '185px',
                        }}>
                
                <Box sx={{  width: '22vw',
                            height: '185px',
                            textAlign: 'center',
                            marginRight: '40px'
                          }}>
                    <div className='inner_box'>
                      <img src={WVector} alt="" className='sw_vector' />
                    </div>
                    <p className='sapien'>Safety Priority</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>

                <Box sx={{  width: '22vw',
                            height: '185px',
                            textAlign: 'center',
                            marginRight: '40px'
                          }}>
                    <div className='inner_box'>
                      <img src={WVector} alt="" className='sw_vector' />
                    </div>
                    <p className='sapien'>Comfort & Customer Service</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>

                <Box sx={{  width: '22vw',
                            height: '185px',
                            textAlign: 'center',
                            marginRight: '40px'
                          }}>
                    <div className='inner_box'>
                      <img src={WVector} alt="" className='sw_vector' />
                    </div>
                    <p className='sapien'>Convenience & Flexibility</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>

                <Box sx={{  width: '22vw',
                            height: '185px',
                            textAlign: 'center'
                          }}>
                    <div className='inner_box'>
                      <img src={WVector} alt="" className='sw_vector' />
                    </div>
                    <p className='sapien'>Convenience & Flexibility</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>
              </Box>
            </Box>
      </Box>
    </Box>
  );
}