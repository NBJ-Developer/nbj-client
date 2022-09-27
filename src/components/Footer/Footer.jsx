import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import './Footer.css'
import { Link } from 'react-router-dom'
import { TbMinusVertical } from 'react-icons/tb'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { FiTwitter, FiInstagram } from 'react-icons/fi'
import FootLine from '../../assets/images/Big Rule.png'
import Footline from '../../assets/images/Small Rule.png'



export default function Footer() {
  
  return (
    <Box>
        {/* SMALL DEVICE */}
        <BottomNavigation sx={{ display: {xs: 'block', md: 'none'},
                                bottom: '0',
                                left: '0',
                                right: '0',
                                marginTop: '56px',
                                maxWidth: '100%',
                                height: '334px',
                                background: '#000000'
                            }}>
                    <Box sx={{ display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '20px'
                            }}>
                            <Box sx={{  width: '15vw',
                                        height: '59px',
                                        background: '#d9d9d9',
                                        borderRadius: '5px',
                                        marginRight: '4px'
                                    }}></Box>
                            <Box sx={{  width: '25vw',
                                        height: '59px',
                                    }}>
                                        <h1 className='nbj'>NBJ VIP GROUND HANDLING</h1>
                            </Box>
                    </Box>

                    <Box sx={{ display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '114px'
                            }}>
                            <Box sx={{  width: '60vw',
                                        height: '33px',
                                        background: '#d9d9d9',
                                        borderRadius: '5px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingTop: '3px'
                                    }}>
                                    <a href="/" className='href'>
                                        <TiSocialLinkedinCircular style={{ width: '20vw', height: '20px', cursor: 'pointer'}} />
                                    </a>
                                    <a href="/" className='href'>
                                        <FiTwitter style={{ width: '20vw', height: '20px', cursor: 'pointer'}} />
                                    </a>
                                    <a href="/" className='href'>
                                        <FiInstagram style={{ width: '20vw', height: '20px', cursor: 'pointer'}} />
                                    </a>
                            </Box>
                    </Box>

                    <Box sx={{  display: 'flex',
                                justifyContent: 'center',
                                marginTop: '24px'
                    }}>
                        <img src={Footline} alt="" />
                    </Box>

                    <Box sx={{  display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '13px'
                    }}>
                        <Link to='/' className='footer_terms'>Privacy Policy</Link>
                        <TbMinusVertical style={{   color: '#ffffff',
                                                    width: '4vw',
                                                    height: '22px'
                                                }} />
                        <Link to='/' className='footer_terms'>Terms & Conditions</Link>
                    </Box>

                    <Box sx={{  display: 'flex',
                                justifyContent: 'center',
                                marginTop: '5px'
                            }}>
                                <p className='rights'>2022 All Rights Reserved. NBJ</p>
                    </Box>
        </BottomNavigation>

        {/* MEDIUM DEVICE */}
        <BottomNavigation sx={{ display: {xs: 'none', md: 'block'},
                                bottom: '0',
                                left: '0',
                                right: '0',
                                marginTop: '119px',
                                maxWidth: '100%',
                                height: '611px',
                                background: '#000000'
                            }}>
            <Box sx={{      display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '50px'
                    }}>
                <Box sx={{  width: '5vw',
                            height: '82px',
                            borderRadius: '10px',
                            background: '#d9d9d9',
                            marginRight: '10px'
                        }}></Box>
                <Box sx={{  width: '10vw',
                            height: '82px',
                        }}>
                    <h1 className='nbj_web'>NBJ VIP GROUND HANDLING</h1>
                </Box>
            </Box>

            <Box sx={{  display: 'flex',
                        justifyContent: 'center',
                        marginTop: '56px'
                    }}>
                        <Link to='/' className='footer_nav_web'>OUR STORY</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '6vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_nav_web'>OUR SERVICES</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '6vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_nav_web'>MEDIA</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '6vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_nav_web'>CONTACT</Link>
            </Box>

            <Box sx={{  display: 'flex',
                        justifyContent: 'center',
                        marginTop: '56px'
                    }}>
                        <Link to='/' className='footer_nav_web'>GROUND SUPPORT</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '6vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_nav_web'>CHARTER & BOOKINGS</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '6vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_nav_web'>MAINTENANCE</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '6vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_nav_web'>WINGS INFLIGHT</Link>
            </Box>

            <Box sx={{  display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '56px'
                    }}>
                        <p className='footer_con_web'>Connect with us</p>
                        <Box sx={{ width: '20vw',
                                    height: '33px',
                                    background: '#d9d9d9',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: '18px',
                                    paddingTop: '5px'
                                }}>

                                <a href="/" className='href'>
                                    <TiSocialLinkedinCircular style={{ width: '7vw', height: '20px', cursor: 'pointer'}} />
                                </a>
                                <a href="/" className='href'>
                                    <FiTwitter style={{ width: '7vw', height: '20px', cursor: 'pointer'}} />
                                </a>
                                <a href="/" className='href'>
                                    <FiInstagram style={{ width: '7vw', height: '20px', cursor: 'pointer'}} />
                                </a>
                        </Box>
            </Box>

            <Box sx={{  display: 'flex',
                        justifyContent: 'center',
                        marginTop: '56px'
                    }}>
                <img src={FootLine} alt="" className='foot_line' />
            </Box>

            <Box sx={{  display: 'flex',
                        justifyContent: 'center',
                        marginTop: '56px'
                    }}>
                        <Link to='/' className='footer_terms_web'>Privacy Policy</Link>
                        <TbMinusVertical style={{color: '#ffffff',
                                                    width: '2vw',
                                                    height: '23px'
                                                }} />
                        <Link to='/' className='footer_terms_web'>Terms & Conditions</Link>
            </Box>

            <Box sx={{  display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                        <p className='rights_web'>2022 All Rights Reserved. NBJ</p>
            </Box>
        </BottomNavigation>
    </Box>
  );
}
