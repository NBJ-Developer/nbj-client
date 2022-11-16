import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'react-router-dom'
import { TbMinusVertical } from 'react-icons/tb'
import Typography from '@mui/material/Typography';
import MediaComponent from './MediaComponent';
import NbjLogo from './NbjLogo';
import LinkComponent from './LinkComponent';



export default function Footer() {

  const linkItems1 = 
  ['OUR STORY', 'OUR SERVICES', 'MEDIA', 'CONTACT',]
  const linkItems2 = 
  ['GROUND SUPPORT', 'CHATER & BOOKING', 'CREW SERVICES', 'HOSPITALITY',]
  
  return (
    <Box sx={{
        backgroundColor: '#203578'
    }}>
        {/* SMALL DEVICE */}
        {/* <BottomNavigation sx={{ 
            display: {xs: 'block', md: 'none'},
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: '56px',
            maxWidth: '100%',
            height: '334px',
            background: '#203578'
        }}>
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '20px'
            }}>
                <Box sx={{
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          }}>
            <img src="nbj-logo.png" alt="NBJ-LOGO" style={{width: '50px', height: '50px'}}/>
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
                        color: '#203578',
                        cursor: 'pointer'
                    }}>
                        <TiSocialLinkedinCircular style={{ 
                            width: '20vw', 
                            height: '20px', 
                            cursor: 'pointer'
                        }} />
                    </a>

                    <a href="/" style={{
                        color: '#203578',
                        cursor: 'pointer'
                    }}>
                        <FiTwitter style={{ 
                            width: '20vw', 
                            height: '20px', 
                            cursor: 'pointer'
                        }} />
                    </a>

                    <a href="/" style={{
                        color: '#203578',
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
        </BottomNavigation> */}

        {/* MEDIUM DEVICE */}
        <BottomNavigation sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: '119px',
            maxWidth: '100%',
            minHeight: '611px',
            background: '#203578'
        }}>
          <NbjLogo />
          <Box sx={{
            mt: 3,
            px: {xs: 16, md: 0},
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'row', md: 'column'},
            justifyContent: {xs: 'space-between', md: 'center'},
            alignItems: 'center',
          }}>
            <Box sx={{
              my: 3,
              width: {md: '65%'},
              display: 'flex',
              flexDirection: {xs: 'column', md: 'row'},
              justifyContent: {xs: 'space-between', md: 'center'}
            }}>
              
              <Typography sx={{
                display: {xs: 'block', md: 'none'},
                m: 1.5,
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                color: '#ffffff',
                textDecoration: 'none'
              }}>
                Quick Links
              </Typography>
              {linkItems1.map((item, index) => (
              <Box key={index}>
              <LinkComponent item={item}/>
              </Box>
              ))}
            </Box>
            <Box sx={{
              width: {xs: '30%', md: '90%'},
              display: 'flex',
              flexDirection: {xs: 'column', md: 'row'},
              justifyContent: 'center'
            }}>
              <Typography sx={{
                display: {xs: 'block', md: 'none'},
                m: 1.5,
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                color: '#ffffff',
                textDecoration: 'none'
              }}>
                Services
              </Typography>
              {linkItems2.map((item, index) => (
              <Box key={index}>
              <LinkComponent item={item}/>
              </Box>
              ))}
            </Box>
          </Box>
          <MediaComponent />
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Box sx={{
              my: 5,
              width: '80%',
              height: '3px',
              backgroundColor: '#F9A020'
            }} />
          </Box>

            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
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
