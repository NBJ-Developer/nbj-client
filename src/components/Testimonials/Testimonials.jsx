import * as React from 'react';
import Box from '@mui/material/Box';
import './Testimonials.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Testimonials() {
  return (
    <Box>
      {/* SMALL DEVICE */}
        <Box sx={{  display: { xs: 'flex', md: 'none' },
                    justifyContent: 'center',
                }}>
            <Box sx={{  width: '80vw',
                    height: '470px',
                    marginTop: '56px',
                }}>
                    <h1 className='test_cust'>WHAT OUR CUSTOMERS SAY</h1>
                    <FaQuoteLeft style={{ marginTop: '6px', width: '38px', height: '50px'}}/>
                    <p className='test_trust'>Trusting NBJ is a decision I <br /> never regret making....</p>

                    <Box sx={{display: 'flex',
                                justifyContent: 'center',
                                marginTop: '10px'
                            }}>
                        <Box sx={{  width: '10vw',
                                    height: '40px',
                                    backgroundColor: '#d9d9d9',
                                    borderRadius: '100px'
                                }}></Box>    
                        <Box>
                            <p className='test_chief'>Chief Elona Maxwell</p>
                            <p className='test_ceo'>CEO Max Ent.</p>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '30px'}}>
                        <p className='test_trust'>Trusting NBJ is a decision I <br /> never regret making....</p>

                        <Box sx={{display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px'
                                }}>
                            <Box sx={{  width: '10vw',
                                        height: '40px',
                                        backgroundColor: '#d9d9d9',
                                        borderRadius: '100px'
                                    }}></Box>    
                            <Box>
                                <p className='test_chief'>Chief Elona Maxwell</p>
                                <p className='test_ceo'>CEO Max Ent.</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '30px'}}>
                        <p className='test_trust'>Trusting NBJ is a decision I <br /> never regret making....</p>

                        <Box sx={{display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px'
                                }}>
                            <Box sx={{  width: '10vw',
                                        height: '40px',
                                        backgroundColor: '#d9d9d9',
                                        borderRadius: '100px'
                                    }}></Box>    
                            <Box>
                                <p className='test_chief'>Chief Elona Maxwell</p>
                                <p className='test_ceo'>CEO Max Ent.</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{display: 'flex',
                                justifyContent: 'right'
                            }}>
                        <FaQuoteRight style={{ width: '38px', height: '50px'}}/>
                    </Box>
            </Box>
        </Box>

      {/* MEDIUM DEVICE */}
        <Box sx={{  display: { xs: 'none', md: 'flex' },
                justifyContent: 'center'
            }}>
            <Box sx={{ marginTop: '119px',
                        width: '90%',
                        height: '570px'
                    }}>
                <h1 className='test_web'>TESTIMONIALS</h1>
                <p className='test_client_web'>What our Clients  have to say</p>
                <FaQuoteLeft style={{ width: '100px', height: '150px'}}/>

                <Box sx={{  display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '100px'
                        }}>
                    <Box sx={{  width: '85%',
                                height: '137.43px',
                                display: 'flex'
                            }}>
                        <Box sx={{  width: '33%',
                                    height: '138px',
                                    marginRight: '100px'
                                }}>
                            <p className='test_trust_web'>Trusting NBJ is a decision I <br /> never regret making....</p>
                            <Box sx={{display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '14px'
                                        }}>
                                    <Box sx={{  width: '20%',
                                                height: '58px',
                                                backgroundColor: '#d9d9d9',
                                                borderRadius: '100px'
                                            }}></Box>    
                                    <Box>
                                        <p className='test_chief_web'>Chief Elona Maxwell</p>
                                        <p className='test_ceo_web'>CEO Max Ent.</p>
                                    </Box>
                                </Box>
                        </Box>

                        <Box sx={{  width: '33%',
                                    height: '138px',
                                    marginRight: '100px'
                                }}>
                            <p className='test_trust_web'>Trusting NBJ is a decision I <br /> never regret making....</p>
                            <Box sx={{display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '14px'
                                        }}>
                                    <Box sx={{  width: '20%',
                                                height: '58px',
                                                backgroundColor: '#d9d9d9',
                                                borderRadius: '100px'
                                            }}></Box>    
                                    <Box>
                                        <p className='test_chief_web'>Chief Elona Maxwell</p>
                                        <p className='test_ceo_web'>CEO Max Ent.</p>
                                    </Box>
                                </Box>
                        </Box>

                        <Box sx={{  width: '33%',
                                    height: '138px'
                                }}>
                            <p className='test_trust_web'>Trusting NBJ is a decision I <br /> never regret making....</p>
                            <Box sx={{display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '14px'
                                        }}>
                                    <Box sx={{  width: '20%',
                                                height: '58px',
                                                backgroundColor: '#d9d9d9',
                                                borderRadius: '100px'
                                            }}></Box>    
                                    <Box>
                                        <p className='test_chief_web'>Chief Elona Maxwell</p>
                                        <p className='test_ceo_web'>CEO Max Ent.</p>
                                    </Box>
                                </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{  display: 'flex',
                            justifyContent: 'right'
                                }}>
                            <FaQuoteRight style={{ width: '100px', height: '150px'}}/>
                </Box>
            </Box>
        </Box>
      
    </Box>
  );
}