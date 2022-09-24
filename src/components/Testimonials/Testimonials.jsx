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
                    height: '430px',
                    marginTop: '56px',
                }}>
                    <h1 className='test_cust'>WHAT OUR CUSTOMERS SAY</h1>
                    <FaQuoteLeft style={{marginTop: '6px'}}/>
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
                        <FaQuoteRight />
                    </Box>
            </Box>
        </Box>

      {/* MEDIUM DEVICE */}
     <Box sx={{  display: { xs: 'none', md: 'block' }}}></Box>
      
    </Box>
  );
}