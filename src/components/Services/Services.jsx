import * as React from 'react';
import Box from '@mui/material/Box';
import './Services.css'
import Wvector from '../../assets/images/BBVector.png'
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';



export default function Services() {
  return (
    <Box>
        {/* SMALL DEVICE */}
        <Box sx={{  display: {xs: 'block', md: 'none'}}}></Box>

        {/* MEDIUM DEVICE */}
        <Box sx={{    display: {xs: 'none', md: 'block'},
                    marginTop: '119px',
                    textAlign: 'center'
                }}>
                    <h1 className='our'>OUR <span className='inner_story'>SERVICES</span> </h1>
                    <p className='p_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    <Box sx={{  display: 'flex',
                                justifyContent: 'center'
                            }}>
                        <Box sx={{  width: '90vw',
                                    height: '450px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>

                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px',
                                                marginRight: '50px'
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Ground Support</p>
                                    </Box>

                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px', 
                                                marginRight: '50px'
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Aircraft Charter & Bookings</p>
                                    </Box>

                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px',
                                                marginRight: '50px'
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Maintenance</p>
                                    </Box>
                                    
                                    <Box sx={{  width: '20vw',
                                                height: '412.13px',
                                                background: '#000000',
                                                borderRadius: '7.3516px',
                                            }}>
                                                <img src={Wvector} alt="" className='wvector' />
                                                <p className='p_services'>Wings Inflight</p>
                                    </Box>
                        </Box>
                    </Box>
                    
                    <Box sx={{  display: 'flex',
                                justifyContent: 'center'
                            }}><ContainedButtonsMB /></Box>
        </Box>

    </Box>
  );
}