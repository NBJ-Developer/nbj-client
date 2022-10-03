import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';

function ServiceList() {
  return (
    <Box sx={{
        width: '100%'
    }}>
        {/* SMALL DEVICE */}
        <Box sx={{
            display: { xs: 'flex', md: 'none'},
        }}>
        </Box>

        {/* MEDIUM DEVICE */}
      <Box sx={{
            display: { xs: 'none', md: 'flex'},
            justifyContent: 'center',
            marginTop: '140px'
        }}>
            <Box sx={{
                width: '80%',
                height: '490px',
                display: 'flex'
            }}>
                <Box sx={{
                    width: '50%',
                    background: '#d9d9d9',
                }}></Box>
                <Box sx={{
                    width: '50%'
                }}>
                    <Typography sx={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '19px',
                        lineHeight: '25.87px',
                        color: '#000000',
                        textAlign: 'justify',
                        margin: '50px 0 0 60px'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. 
                    </Typography>
                    <List
                        sx={{ 
                            width: '100%', 
                            bgcolor: 'background.paper',
                            marginLeft: '30px' 
                        }}
                        aria-label="contacts"
                        >
                            {[1, 2, 3, 4, 5].map((value) => (
                        <ListItem sx={{py: '10px'}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <CircleIcon style={{color: '#d9d9d9'}} />
                            </ListItemIcon>
                            <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                            </ListItemButton>
                        </ListItem>
                            ))}
                    </List>
                </Box>
            </Box>
      </Box>
    </Box>
  )
}

export default ServiceList