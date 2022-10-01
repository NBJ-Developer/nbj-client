import * as React from 'react';
import Box from '@mui/material/Box';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Typography from '@mui/material/Typography';

export default function Testimonials() {
  return (
    <Box>
      {/* SMALL DEVICE */}
        <Box sx={{  
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
        }}>
            <Box sx={{  
                width: '80%',
                height: '470px',
                marginTop: '56px',
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '19px',
                    lineHeight: '22px',
                    color: '#000000',
                    textAlign: 'center'
                }} variant='h1'>
                    WHAT OUR CUSTOMERS SAY
                </Typography>
                <FaQuoteLeft style={{ 
                    marginTop: '6px', 
                    width: '38px', 
                    height: '50px'
                }}/>

                <Box>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#000000',
                    textAlign: 'center'
                }}>
                    Trusting NBJ is a decision I <br /> never regret making....
                </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                        <Box sx={{  
                            width: '12%',
                            backgroundColor: '#d9d9d9',
                            borderRadius: '100px'
                        }}></Box>    
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '19px',
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                                Chief Elona Maxwell
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                                CEO Max Ent.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '30px'}}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#000000',
                        textAlign: 'center'
                    }}>
                        Trusting NBJ is a decision I <br /> never regret making....
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                        <Box sx={{  
                            width: '12%',
                            backgroundColor: '#d9d9d9',
                            borderRadius: '100px'
                        }}></Box>    
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '19px',
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                                Chief Elona Maxwell
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                                CEO Max Ent.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '30px'}}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#000000',
                        textAlign: 'center'
                    }}>
                        Trusting NBJ is a decision I <br /> never regret making....
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                        <Box sx={{  
                            width: '12%',
                            backgroundColor: '#d9d9d9',
                            borderRadius: '100px'
                        }}></Box>    
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '19px',
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                                Chief Elona Maxwell
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                                CEO Max Ent.
                            </Typography>
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
        <Box sx={{  
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center'
        }}>
            <Box sx={{ 
                marginTop: '119px',
                width: '90%',
                height: '570px'
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '35px',
                    color: '#000000',
                    textAlign: 'center',
                    marginTop: '22px'
                }} variant='h1'>
                    TESTIMONIALS
                </Typography>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#000000',
                    textAlign: 'center',
                    marginTop: '14px'
                }}>
                    What our Clients  have to say
                </Typography>
            
                <FaQuoteLeft style={{ 
                    width: '100px', 
                    height: '50px',
                    marginBottom: '50px'
                }}/>

                <Box sx={{  
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '100px'
                }}>
                    <Box sx={{  
                        width: '85%',
                        display: 'flex'
                    }}>
                        <Box sx={{  
                            width: '33%',
                            marginRight: '100px'
                        }}>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '24px',
                                lineHeight: '32px',
                                color: '#000000',
                                textAlign: 'center',
                            }}>
                                Trusting NBJ is a decision I <br /> never regret making....
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '14px'
                            }}>
                                <Box sx={{  
                                    width: '20%',
                                    height: '58px',
                                    backgroundColor: '#d9d9d9',
                                    borderRadius: '100px'
                                }}></Box>    
                                <Box>
                                    <Typography sx={{
                                        fontFamily: 'Raleway',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '21px',
                                        lineHeight: '28px',
                                        color: '#000000',
                                        textAlign: 'center',
                                    }}>
                                        Chief Elona Maxwell
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Raleway',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '24px',
                                        color: '#000000',
                                        textAlign: 'center',
                                    }}>
                                        CEO Max Ent.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{  
                            width: '33%',
                            marginRight: '100px'
                        }}>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '24px',
                                lineHeight: '32px',
                                color: '#000000',
                                textAlign: 'center',
                            }}>
                                Trusting NBJ is a decision I <br /> never regret making....
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '14px'
                            }}>
                                <Box sx={{  
                                    width: '20%',
                                    height: '58px',
                                    backgroundColor: '#d9d9d9',
                                    borderRadius: '100px'
                                }}></Box>    
                                <Box>
                                    <Typography sx={{
                                        fontFamily: 'Raleway',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '21px',
                                        lineHeight: '28px',
                                        color: '#000000',
                                        textAlign: 'center',
                                    }}>
                                        Chief Elona Maxwell
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Raleway',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '24px',
                                        color: '#000000',
                                        textAlign: 'center',
                                    }}>
                                        CEO Max Ent.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{  
                            width: '33%',
                            height: '138px'
                        }}>
                            <Typography sx={{
                                fontFamily: 'Raleway',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '24px',
                                lineHeight: '32px',
                                color: '#000000',
                                textAlign: 'center',
                            }}>
                                Trusting NBJ is a decision I <br /> never regret making....
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '14px'
                            }}>
                                <Box sx={{  
                                    width: '20%',
                                    height: '58px',
                                    backgroundColor: '#d9d9d9',
                                    borderRadius: '100px'
                                }}></Box>    
                                <Box>
                                    <Typography sx={{
                                            fontFamily: 'Raleway',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '21px',
                                            lineHeight: '28px',
                                            color: '#000000',
                                            textAlign: 'center',
                                        }}>
                                            Chief Elona Maxwell
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Raleway',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '18px',
                                            lineHeight: '24px',
                                            color: '#000000',
                                            textAlign: 'center',
                                        }}>
                                            CEO Max Ent.
                                        </Typography>
                                    </Box>
                                </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{  
                    display: 'flex',
                    justifyContent: 'right'
                }}>
                    <FaQuoteRight style={{ 
                        width: '100px', 
                        height: '50px'
                    }}/>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}