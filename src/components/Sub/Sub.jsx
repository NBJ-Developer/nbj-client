import * as React from 'react';
import Box from '@mui/material/Box';
import './Sub.css'
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';


export default function Sub() {
  return (
    <Box>
      {/* SMALL DEVICE */}
       <Box sx={{   display: {xs: 'flex', md: 'none'},
                    justifyContent: 'center',
                }}>
                <Box sx={{ width: '80vw',
                            height: '139px',
                            background: 'rgba(217, 217, 217, 0.5)',
                            marginTop: '56px',
                            borderRadius: '30px 0'
                        }}>
                        <h1 className='sub'>Subscribe to our newsletter</h1>
                        <Box sx={{ display: 'flex',
                                    justifyContent: 'center'
                                }}>
                            <input type="email" className='input_mobile' placeholder='Enter Email' required />
                        </Box>
                        <Box sx={{ display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px'
                                }}>
                            <ContainedButtonsMB />
                        </Box>
                </Box>
        </Box> 

      {/* MEDIUM DEVICE */}
       <Box sx={{   display: {xs: 'none', md: 'flex'},
                    marginTop: '119px',
                    justifyContent: 'center'
                }}>
                <Box sx={{  width: '60vw',
                            height: '224px',
                            background: '#d9d9d9',
                            borderRadius: '50px 0'
                        }}>
                        <h1 className='sub_web'>Subscribe to our newsletter</h1>
                        <Box sx={{  display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '20px'
                                }}>
                            <input type="email" placeholder='Enter Email' className='input_web' required />
                            <Box sx={{ marginLeft: '-50px'}}>
                                <ContainedButtonsMB />
                            </Box>
                        </Box>
                </Box>
        </Box>
      
    </Box>
  );
}