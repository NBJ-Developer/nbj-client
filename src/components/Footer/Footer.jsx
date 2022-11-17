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
  ['OUR STORY', 'OUR SERVICES', 'MEDIA', 'FAQs', 'CONTACT',]
  const linkItems2 = 
  ['GROUND SUPPORT', 'CHATER & BOOKING', 'CREW SERVICES', 'HOSPITALITY',]
  
  const itemsLength1 = linkItems1.length
  const itemsLength2 = linkItems2.length
  return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: '0',
            left: '0',
            right: '0',
            py: 4,
            px: {xs: 6, md: 0},
            marginTop: '119px',
            maxWidth: '100%',
            background: '#06133C'
        }}>
          <NbjLogo />
          <Box sx={{
            mb: {md: 3},
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'row', md: 'column'},
            justifyContent: {xs: 'space-between', md: 'center'},
            alignItems: 'center',
          }}>
            <Box sx={{
              my: 3,
              width: {md: '80%'},
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
                fontSize: '14px',
                lineHeight: '16px',
                color: '#ffffff',
                textDecoration: 'none'
              }}>
                Quick Links
              </Typography>
              {linkItems1.map((item, index) => (
              <Box key={index}>
              <LinkComponent item={item} index={index} itemsLength={itemsLength1}/>
              </Box>
              ))}
            </Box>
            <Box sx={{
              width: {xs: '32%', md: '90%'},
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
                fontSize: '14px',
                lineHeight: '16px',
                color: '#ffffff',
                textDecoration: 'none'
              }}>
                Services
              </Typography>
              {linkItems2.map((item, index) => (
              <Box key={index}>
              <LinkComponent item={item} index={index} itemsLength={itemsLength2}/>
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
              my: 2,
              width: {xs: '90%', md: '80%'},
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
                    fontSize: {xs: '14px', md: '24px'},
                    lineHeight: {xs: '16px', md: '28px'},
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
                    fontSize: {xs: '14px', md: '24px'},
                    lineHeight: {xs: '16px', md: '28px'},
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
                    fontSize: {xs: '14px', md: '24px'},
                    lineHeight: {xs: '16px', md: '28px'},
                    color: '#ffffff',
                }}>
                    2022 All Rights Reserved. NBJ
                </Typography>
            </Box>
        </Box>
  );
}
