import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'react-router-dom'
import { TbMinusVertical } from 'react-icons/tb'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { FiTwitter, FiInstagram } from 'react-icons/fi'
import FootLine from '../../assets/images/Big Rule.png'
import Footline from '../../assets/images/Small Rule.png'
import Typography from '@mui/material/Typography';



export default function Footer() {
  
  return (
    <Box>
        {/* SMALL DEVICE */}
        <BottomNavigation sx={{ 
            display: {xs: 'block', md: 'none'},
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: '56px',
            maxWidth: '100%',
            height: '334px',
            background: '#000000'
        }}>
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '20px'
            }}>
                <Box sx={{  
                    width: '15%',
                    height: '59px',
                    background: '#d9d9d9',
                    borderRadius: '5px',
                    marginRight: '4px'
                }}>
                </Box>
                <Box sx={{  
                    width: '25%',
                    height: '59px',
                }}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '21px',
                        color: '#ffffff',
                    }} variant='h1'>
                        NBJ VIP GROUND HANDLING
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '114px'
            }}>
                <Box sx={{  
                    width: '60%',
                    height: '33px',
                    background: '#d9d9d9',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '3px'
                }}>
                    <a href="/" style={{
                        color: '#000000',
                        cursor: 'pointer'
                    }}>
                        <TiSocialLinkedinCircular style={{ 
                            width: '20vw', 
                            height: '20px', 
                            cursor: 'pointer'
                        }} />
                    </a>

                    <a href="/" style={{
                        color: '#000000',
                        cursor: 'pointer'
                    }}>
                        <FiTwitter style={{ 
                            width: '20vw', 
                            height: '20px', 
                            cursor: 'pointer'
                        }} />
                    </a>

                    <a href="/" style={{
                        color: '#000000',
                        cursor: 'pointer'
                    }}>
                        <FiInstagram style={{ 
                            width: '20vw', 
                            height: '20px', 
                            cursor: 'pointer'
                        }} />
                    </a>
                </Box>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '24px'
            }}>
                <img src={Footline} 
                    alt="" 
                />
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '13px'
            }}>
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    Privacy Policy
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '4vw',
                    height: '22px'
                }} />
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    Terms & Conditions
                </Link>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px'
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '18px',
                    color: '#ffffff',
                }}>
                    2022 All Rights Reserved. NBJ
                </Typography>
            </Box>
        </BottomNavigation>

        {/* MEDIUM DEVICE */}
        <BottomNavigation sx={{ 
            display: {xs: 'none', md: 'block'},
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: '119px',
            maxWidth: '100%',
            height: '611px',
            background: '#000000'
        }}>
            <Box sx={{      
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '50px'
            }}>
                <Box sx={{  
                    width: '5%',
                    height: '82px',
                    borderRadius: '10px',
                    background: '#d9d9d9',
                    marginRight: '10px'
                }}></Box>
                <Box sx={{  
                    width: '10%',
                    height: '82px',
                }}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '24px',
                        lineHeight: '28px',
                        color: '#ffffff',
                    }} variant='h1'>
                        NBJ VIP GROUND HANDLING
                    </Typography>
                </Box>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '56px'
            }}>
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    OUR STORY
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '6vw',
                    height: '23px'
                }} />

                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    OUR SERVICES
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '6vw',
                    height: '23px'
                }} />

                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    MEDIA
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '6vw',
                    height: '23px'
                }} />

                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    CONTACT
                </Link>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '56px'
            }}>

                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                   GROUND SUPPORT
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '6vw',
                    height: '23px'
                }} />

                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                   CHARTER & BOOKINGS
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '6vw',
                    height: '23px'
                }} />
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                   MAINTENANCE
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '6vw',
                    height: '23px'
                }} />
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                   WINGS INFLIGHT
                </Link>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '56px'
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '#ffffff',
                }}>
                    Connect with us
                </Typography>
                    <Box sx={{ 
                        width: '20vw',
                        height: '33px',
                        background: '#d9d9d9',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '18px',
                        paddingTop: '5px'
                    }}>
                        <a href="/" style={{
                            color: '#000000',
                            cursor: 'pointer'
                        }}>
                            <TiSocialLinkedinCircular style={{ 
                                width: '7vw', 
                                height: '20px', 
                                cursor: 'pointer'
                            }} />
                        </a>

                        <a href="/" style={{
                            color: '#000000',
                            cursor: 'pointer'
                        }}>
                            <FiTwitter style={{ 
                                width: '7vw', 
                                height: '20px', 
                                cursor: 'pointer'
                            }} />
                        </a>

                        <a href="/" style={{
                            color: '#000000',
                            cursor: 'pointer'
                        }}>
                            <FiInstagram style={{ 
                                width: '7vw', 
                                height: '20px', 
                                cursor: 'pointer'
                            }} />
                        </a>
                    </Box>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '56px'
            }}>
                <img src={FootLine} 
                    alt="" 
                    style={{
                        width: '90%'
                    }} 
                />
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '56px'
            }}>
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    Privacy Policy
                </Link>
                <TbMinusVertical style={{   
                    color: '#ffffff',
                    width: '2vw',
                    height: '23px'
                }} />
                <Link to='/' style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#ffffff',
                    textDecoration: 'none'
                }}>
                    Terms & Conditions
                </Link>
            </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px'
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#ffffff',
                }}>
                    2022 All Rights Reserved. NBJ
                </Typography>
            </Box>
        </BottomNavigation>
    </Box>
  );
}
