
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link'
import SecondaryButton from '../../elements/Button/SecondaryButton';

const pages = ['Home', 'About', 'Media', 'Services', 'Contact Us'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
      position: 'absolute',
      top: 0,
      zIndex: 5,
      backgroundColor: 'inherit',
      border: 'none',
      boxShadow: 'none',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: {md:'flex'},
          width: '100%',
          justifyContent: 'space-between',
        }}>
        {/* NBJ logo for the nav bar */}
        <Box>
          <Box sx={{
          display: 'flex',
          py:2,
          }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          width: '50px',
          height: '50px'
          }}>
            <img src="nbj-logo.png" alt="NBJ-LOGO"/>
          </Box>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
            display: {xs: 'none', md: 'block'},
            mt: 1,
            width: '165px',
            lineHeight: '20px',
            textAlign: 'center',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            }}
          >
            NBJ VIP GROUND HANDLING LTD 
          </Typography>
          </Box>
        </Box>
        {/* Navigation Links for the nav bar */}
        <Box sx={{
          width: '45%',
          display: {xs: 'none', md:'flex'},
          justifyContent: 'space-between',
        }}>
          {pages.map((page) => (
            <Box>
            <Link href={`/${page}`} underline="hover" sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#F9A020',
                textDecorationWidth: '5px',
                textDecorationThickness: '3px',             
                }
            }}>
              {page}
            </Link>
          </Box>
            
          ))}
        </Box>
        {/* Get a quote button */}
        <Box sx={{  
          display: { xs: 'none', md: 'flex' },
          mr: 3, 
        }}>
          <SecondaryButton buttonLabel={'Get a quote'} />
        </Box>
        {/* Menu Icon for the mobile view */}
        <Box sx={{ 
          display: { xs: 'flex', md: 'none' }, 
          }}>
          <IconButton 
            size="large"
            sx={{ 
              color: '#ffffff',
            }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
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
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
