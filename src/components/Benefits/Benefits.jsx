import * as React from 'react';
import Box from '@mui/material/Box';
import './Benefits.css'
import { BsCheck2Circle } from 'react-icons/bs'
import WhiteVector from '../../assets/images/BBVector.png'
import SWVector from '../../assets/images/BBVector_small.png'

export default function Benefits() {
  return (
    <div>
      {/* SMALL DEVICE */}
      <Box
        sx={{ display: { xs: 'block', md: 'none' },
          width: 315,
          height: 269,
          backgroundColor: '#ffffff',
          margin: '160px 0 20px 30px'

        }}>
          <h4 className='what_you'>WHAT YOU GET</h4>
          <div className='div_column'>
              <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
              <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
          </div>
          <div className='div_column_2'>
              <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
              <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
          </div>

          <Box sx={{
              width: 315,
              height: 144,
              backgroundColor: '#000000',
              borderRadius: '10px',
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <img src={WhiteVector} alt="" />
          </Box>
      </Box>

        {/* MEDIUM DEVICE */}
      <Box sx={{  display: {xs: 'none', md: 'block'}, 
                  marginTop: '83px'}}>
      <h4 className='you_get'>WHAT YOU GET</h4>
            <Box sx={{display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
              }}>
              <Box sx={{  display: 'flex',
                          alignItems: 'center',
                          width: '1122px',
                          height: '263px'
                }}>
                
                <Box sx={{  width: '320px',
                            height: '185px',
                            textAlign: 'center',
                            marginRight: '81px'
                  }}>
                    <div className='inner_box'>
                      <img src={SWVector} alt="" />
                    </div>
                    <p className='sapien'>Sapien phasellus</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>

                <Box sx={{  width: '320px',
                            height: '185px',
                            textAlign: 'center',
                            marginRight: '81px'
                  }}>
                    <div className='inner_box'>
                      <img src={SWVector} alt="" />
                    </div>
                    <p className='sapien'>Sapien phasellus</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>

                <Box sx={{  width: '320px',
                            height: '185px',
                            textAlign: 'center'
                  }}>
                    <div className='inner_box'>
                      <img src={SWVector} alt="" />
                    </div>
                    <p className='sapien'>Sapien phasellus</p>
                    <p className='pharetra'>At pharetra sed justo id sit nam lectus lorem.</p>
                </Box>
              </Box>
            </Box>
      </Box>
    </div>
  );
}