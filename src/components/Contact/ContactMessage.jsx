import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ContainedButtonsMB from '../../elements/Button/ContainedButtonsMB';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { FiTwitter, FiInstagram } from 'react-icons/fi'


function ContactMessage() {
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [comment, setComment] = React.useState('');

const handleSubmit = () => {
    const inputs = {
        name, email, comment
    }
    console.log(inputs);
}

  return (
    <Box sx={{
        maxWidth: '100%'
    }}>
        {/* SMALL DEVICE */}
        <Box sx={{
            display: {xs: 'flex', md: 'none'},
            justifyContent: 'center',
            width: '100%',
        }}>
            <Box sx={{
                width: '85%',
            }}>
              <Box sx={{
                    backgroundColor: '#d9d9d9',
                    marginTop: '25px',
                    paddingLeft: '22px'
                }}>
                    <Typography variant='h6' sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '21.79px',
                        color: '#000000',
                        paddingTop: '6px',
                        marginBottom: '10px'
                    }}>
                        Send a message
                    </Typography>

                    {/* FORM */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { my: 1, width: '70%' },
                        }}
                        // noValidate
                        // autoComplete="off"
                        >
                        <div>
                            <label style={{
                               fontFamily: 'Raleway',
                               fontStyle: 'normal',
                               fontWeight: '400',
                               fontSize: '10px',
                               lineHeight: '10.89px',
                               color: '#000000', 
                            }}>
                                Name
                            </label> <br />
                            <TextField
                                id="outlined-name"
                                label="Input Name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px'
                                }}
                                required
                            />
                        </div>
                        <div>
                        <label style={{
                               fontFamily: 'Raleway',
                               fontStyle: 'normal',
                               fontWeight: '400',
                               fontSize: '10px',
                               lineHeight: '10.89px',
                               color: '#000000', 
                            }}>
                                Email
                            </label> <br />
                            <TextField
                                id="outlined-email"
                                label="Input Email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px'
                                }}
                                required
                            />
                        </div>
                        <div>
                        <label style={{
                               fontFamily: 'Raleway',
                               fontStyle: 'normal',
                               fontWeight: '400',
                               fontSize: '10px',
                               lineHeight: '10.89px',
                               color: '#000000',
                               marginTop: '10px' 
                            }}>
                                Comment
                            </label> <br />
                            <TextField
                                id="outlined-multiline-static"
                                label="Comments"
                                type="text"
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                multiline
                                rows={4}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px'
                                }}
                                />
                        </div>

                        <Box sx={{
                            marginTop: '10px',
                            paddingBottom: '10px'
                        }}>
                            <ContainedButtonsMB onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Box> 
                <Box sx={{
                    background: '#000000',
                    paddingLeft: '40px',
                    paddingBottom: '30px'
                }}>
                    <Typography variant='h6' sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '10px',
                        lineHeight: '12px',
                        color: '#ffffff',
                        paddingTop: '30px',
                    }}>
                        Contact Info
                    </Typography>

                    <Link to="/" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '18px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'flex',
                        marginTop: '22px'
                    }}>
                        <CallIcon /> &nbsp; +234 8169003746
                    </Link>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '18px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'flex',
                        marginTop: '5px'
                        }}>
                        <LocationOnIcon /> &nbsp; Plot 23, MMIA Road, Ikeja, Lagos
                    </Typography>

                    <Link to="/" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '18px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'flex',
                        marginTop: '5px'
                        }}>
                        <MailOutlineIcon /> &nbsp; nbjvipgroundhandling@gmail.com
                    </Link>

                    <Box sx={{  
                        width: '60%',
                        height: '33px',
                        background: '#d9d9d9',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '3px',
                        marginTop: '13px'
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

                    <Box sx={{
                        width: '80%',
                        height: '150px',
                        borderRadius: '5px',
                        background: '#d9d9d9',
                        marginTop: '16px',
                    }}></Box>
                </Box> 
            </Box>
        </Box>


        {/* MEDIUM DEVICE */}
        <Box sx={{
            width: '100%',
            display: {xs: 'none', md: 'flex'},
            justifyContent: 'center',
            marginTop: '100px'
        }}>
            <Box sx={{
                width: '90%',
                height: '700px',
                display: 'flex'
            }}>
                <Box sx={{
                    width: '50%',
                    backgroundColor: '#d9d9d9',
                    paddingLeft: '80px',
                }}>
                    <Typography variant='h6' sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '27px',
                        color: '#000000',
                        paddingTop: '43px',
                        marginBottom: '30px'
                    }}>
                        Send a message
                    </Typography>

                    {/* FORM */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { my: 1, width: '90%' },
                        }}
                        // noValidate
                        // autoComplete="off"
                        >
                        <div>
                            <label style={{
                               fontFamily: 'Raleway',
                               fontStyle: 'normal',
                               fontWeight: '400',
                               fontSize: '16px',
                               lineHeight: '22px',
                               color: '#000000', 
                            }}>
                                Name
                            </label> <br />
                            <TextField
                                id="outlined-name"
                                label="Input Name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px'
                                }}
                                required
                            />
                        </div>
                        <div>
                        <label style={{
                               fontFamily: 'Raleway',
                               fontStyle: 'normal',
                               fontWeight: '400',
                               fontSize: '16px',
                               lineHeight: '22px',
                               color: '#000000', 
                            }}>
                                Email
                            </label> <br />
                            <TextField
                                id="outlined-email"
                                label="Input Email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px'
                                }}
                                required
                            />
                        </div>
                        <div>
                        <label style={{
                               fontFamily: 'Raleway',
                               fontStyle: 'normal',
                               fontWeight: '400',
                               fontSize: '16px',
                               lineHeight: '22px',
                               color: '#000000',
                               marginTop: '10px' 
                            }}>
                                Comment
                            </label> <br />
                            <TextField
                                id="outlined-multiline-static"
                                label="Comments"
                                type="text"
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                multiline
                                rows={8}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px'
                                }}
                                />
                        </div>

                        <Box sx={{
                            marginTop: '90px',
                            paddingBottom: '10px'
                        }}>
                            <ContainedButtonsMB onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    width: '50%',
                    background: '#000000',
                    paddingLeft: '80px'
                }}>
                    <Typography variant='h6' sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '27px',
                        color: '#ffffff',
                        paddingTop: '43px',
                        marginBottom: '30px'
                    }}>
                        Contact Info
                    </Typography>

                    <Link to="/" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '40px'
                    }}>
                        <CallIcon /> &nbsp; +234 8169003746
                    </Link>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '24px'
                        }}>
                        <LocationOnIcon /> &nbsp; Plot 23, MMIA Road, Ikeja, Lagos
                    </Typography>

                    <Link to="/" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '24px'
                        }}>
                        <MailOutlineIcon /> &nbsp; nbjvipgroundhandling@gmail.com
                    </Link>

                    <Box sx={{ 
                        width: '20vw',
                        height: '33px',
                        background: '#d9d9d9',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '36px'
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

                    <Box sx={{
                        width: '80%',
                        height: '330px',
                        borderRadius: '10px',
                        background: '#d9d9d9',
                        marginTop: '30px'
                    }}></Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactMessage