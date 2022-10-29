
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
import ContainedButtons from '../../elements/Button/PrimaryButtons';

const pages = ['About', 'Media', 'Services', 'Contact Us'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'none',
      }}>
          <Box sx={{
            display: {xs:'none', md:'flex'}
          }}>
            <img src="nbj-logo.png" alt="NBJ-LOGO" style={{width: '100px'}}/>
            <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mt: 1,
              width: '165px',
              lineHeight: '15px',
              textAlign: 'center',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NBJ VIP GROUND HANDLING LTD 
          </Typography>
          </Box>
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' } 
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 3, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{  
            flexGrow: 0, 
            display: { xs: 'none', md: 'flex' },
            marginRight: '10px' 
          }}>
            <ContainedButtons buttonLabel={'Get a Quote'} />

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
