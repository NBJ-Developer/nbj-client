import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';



function ServiceList({listItems}) {

  return (
    <Box sx={{
        width: '100%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 16,
        px: 6,
      }}>
        <Box component="img" sx={{
          objectFit: 'cover',
          display: 'block',
          width: '65%',
          height: 'AUTO',
        }}
          src={'servicesAirplain1.png'}
          alt={'servicesAirplain1.png'}
        />
          <Box >
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '19px',
              lineHeight: '25.87px',
              color: '#000000',
              textAlign: 'justify',
              mt: 6,
            }}>
            Embodied in our ground support service are: 
            </Typography>
            <List sx={{ 
                width: '100%', 
              }}
              aria-label="contacts"
              >
                {listItems.map((item, index) => (
                  <ListItem sx={{px: 0,}}>
                    <ListItemButton sx={{
                      p: 0,
                      m: 0,
                    }}>
                    <ListItemIcon>
                        <CircleIcon style={{
                          color: '#F9A020',
                          fontSize: '12px',
                        }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Box>
      </Box>
    </Box>
  )
}

export default ServiceList