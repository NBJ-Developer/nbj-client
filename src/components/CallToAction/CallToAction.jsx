import * as React from 'react';
import Box from '@mui/material/Box';
import './CallToAction.css'
import OrdinaryButton from '../../elements/Button/OrdinaryButton';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom'


export default function CallToAction() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{  display: {xs: 'block', md: 'none'},
                  maxWidth: '100vw',
                  height: '267px',
                  background: '#000000',
                  marginTop: '50px',
                  textAlign: 'center'
              }}>
                <h1 className='cta_ready'>READY TO GET STARTED</h1>
                <p className='cta_book'>Book a flight, charter, get a quote or get in touch?</p>
                <p></p>

                <Box sx={{display: 'flex',
                          justifyContent: 'center',
                          marginTop: '25px'
                        }}>
                  <OrdinaryButton />
                </Box>
                <Box sx={{display: 'flex',
                          justifyContent: 'center',
                          marginTop: '25px'
                        }}>
                  <OrdinaryButton />
                </Box>
              </Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  display: {xs: 'none', md: 'block'},
                  marginTop: '119px'
                }}>
                <Box sx={{ display: 'flex',
                            maxWidth: '100%',
                            height: '473px',
                            background: '#000000',
                            paddingTop: '60px'
                          }}>
                  <Box sx={{  width: '33%',
                              height: '325px',
                              position: 'absolute',
                              left: '12%'
                            }}>
                              <h1 className='cta_question'>Have any questions?</h1>
                              <p className='cta_need'>Need clarifications on any of our services, Say hello!</p>
                              <Link to="/" className='cta_call'><CallIcon /> &nbsp; +234 8169003746</Link>
                              <p className='cta_call_2'><LocationOnIcon /> &nbsp; Plot 23, MMIA Road, Ikeja, Lagos</p>
                              <Link to="/" className='cta_call_2'><MailOutlineIcon /> &nbsp; nbjvipgroundhandling@gmail.com</Link>

                              <Box sx={{ marginTop: '34px'}}>
                                <OrdinaryButton />
                              </Box>
                            </Box>
                  <Box sx={{  width: '33%',
                              height: '325px',
                              position: 'absolute',
                              left: '55%',
                              textAlign: 'center'
                            }}>
                              <h1 className='cta_ready_web'>READY TO GET STARTED?</h1>
                              <p className='cta_book_web'>Book a flight, charter, get a quote or get in touch</p>
                              
                              <Box sx={{  display: 'flex',
                                          justifyContent: 'space-around',
                                          marginTop: '72px'
                                      }}>
                                    <OrdinaryButton />
                                    <OrdinaryButton />
                              </Box>
                            </Box>
                  <Box></Box>
                </Box>
      </Box>

    </Box>
  );
}