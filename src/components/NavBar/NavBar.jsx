import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ContainedButtons from '../../elements/Button/ContainedButtons'
import './NavBar.css'

const pages = ['About', 'Benefits', 'Services', 'Contact Us'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ background: { 
        xs: 'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)',
        sm:  'linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%)',
        md: 'linear-gradient(to right,  #ffffff 0%,#ffffff 25%,#000000 25%,#000000 100%)' },
        height: { xs: '129px', md: '167px' },
        paddingTop: '18px'
        }}>
        <Toolbar disableGutters sx={{alignItems: 'center'}}>
          <Box sx={{ flexGrow: 1 }}>

            {/* SMALL DEVICE */}
            <Box sx={{  display: { xs: 'flex', md: 'none' },
                        width: '25vw',
                        height: '35px',
                        background: '#d9d9d9',
                        borderRadius: '10px',
                        marginLeft: '15px'
            }}>
            </Box>

            {/* MEDIUM DEVICE */}
            <Box sx={{  display: { xs: 'none', md: 'flex' },
                        width: '12vw',
                        height: '45px',
                        background: '#d9d9d9',
                        borderRadius: '10px',
                        marginLeft: '60px'
            }}></Box>
          </Box>


          {/* SMALL DEVICE */}
          <Box sx={
            { 
              flexGrow: 0, 
              display: {
                 xs: 'flex', md: 'none' 
                 },
                 my: 4, 
                }
              }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, backgroundColor: 'rgba(18, 18, 18, 0.37)'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" 
                              sx={{ backgroundColor: '#D9D9D9', 
                                    width: '38vw', 
                                    height: '40px', 
                                    paddingTop: '8px'
                                  }}>
                                      {page}
                  </Typography>
                </MenuItem>
              ))}
              <Box sx={{  flexGrow: 0, 
                          display: { xs: 'block', md: 'none' }, 
                          marginLeft: '30px', 
                          marginTop: '14px'
                      }}>
                <ContainedButtons textAlign="center" />
              </Box>
            </Menu>
          </Box>

          {/* MEDIUM DEVICE */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' },
                     alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 5, 
                      mx: 9, 
                      color: 'white', 
                      display: 'block', 
                      textTransform: 'Capitalize' 
                    }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{  flexGrow: 0, 
                      display: { xs: 'none', md: 'flex' },
                      marginRight: '20px' 
                    }}>
            <ContainedButtons />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;