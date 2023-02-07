import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link'
import NbjLogo from '../../elements/Logo/NbjLogo';
import SecondaryButton from '../../elements/Button/SecondaryButton';
import { useEffect } from 'react';


function ResponsiveAppBar({pages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [index, setIndex] = React.useState('');
  useEffect(()=> {
    if (window.location.pathname.substring(1) === ''){
      setIndex('Home')
    }else{
      setIndex((window.location.pathname.substring(1)))
    }
    
  }, [pages])
  console.log(index)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
      position: 'fixed',
      background: 'linear-gradient(rgba(32, 53, 120, 0.91), rgba(32, 53, 120, 0))',
      px: {xs: 4, sm: 1, md: 3},
      py: 1,
      top: 0,
      border: 'none',
      boxShadow: 'none',
    }}>
      <Container maxWidth="xl" sx={{
        px: 0,
      }}>
        <Toolbar disableGutters sx={{
          display: {md:'flex'},
          width: '100%',
          justifyContent: 'space-between',
        }}>
        {/* NBJ logo for the nav bar */}
        <NbjLogo />
        {/* Navigation Links for the nav bar */}
        <Box sx={{
          width: '20rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {pages.map((page) => (
            <Box>
            <Link href={`${page === 'Home'? '/': `/${page}`}`} sx={{
              textDecoration: page === index?'underline':'none',
              textDecorationThickness: '0.2rem',
              color: page === index?'#F9A020':'#ffffff',
            }}>
              {page}
           </Link>
           </Box>
          ))}
        </Box>
        {/* Get a quote button */}
        <Box sx={{  
          display: { xs: 'none', md: 'flex' }, 
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
                <Box sx={{
                  width: '70vw',
                }}>
                  <Link href={`${page === 'Home'? '/': `/${page}`}`}>
              {page}
            </Link>
          </Box>
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
