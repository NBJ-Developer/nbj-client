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
import { styled } from "@mui/material/styles";
import { Tab, Tabs } from '@mui/material';
import { useEffect } from 'react';




function ResponsiveAppBar({pages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [index, setIndex] = React.useState(0);

  console.log(window.location.pathname.substring(1))
  useEffect(()=> {
    if (window.location.pathname.substring(1) === ''){
      setIndex(0)
    }else{
      setIndex(pages.indexOf(window.location.pathname.substring(1)))
    }
    
  }, [pages])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  console.log(index)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const StyledTab = styled(Tab)({
    color: '#ffffff',
  "&.Mui-selected": {
    color: "#F9A020"
  }
});

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
        <Tabs
          value={index}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            sx: {
              color: '#F9A020',
              backgroundColor: '#F9A020',
            },
          }}
        >
          {pages.map((page, index) => (
            <Link href={`${page === 'Home'? '/': `/${page}`}`} underline="hover" sx={{
                    color: 'transparent',
                    "&.Mui-selected": {
                      color: "#F9A020"
                    }
                  }}>
            <StyledTab label={page} key={index}/>
           </Link>
          ))}
        </Tabs>
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
                <Box>
                  <Link href={`${page === 'Home'? '/': `/${page}`}`} 
                    underline="hover" sx={{
                    color: 'transparent',
                    "&.Mui-selected": {
                      color: "#F9A020"
                    }
                  }}>
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
