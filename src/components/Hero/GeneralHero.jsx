import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ContainedButtons from '../../elements/Button/ContainedButtons'
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const pages = ['Home', 'Benefits', 'Services', 'Contact Us'];

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
        xs: '#000000', 
        md: '#000000' 
      },
        height: {xs:'149px', md:'364px'},
        pt: '30px',
        }}>
        <Toolbar disableGutters sx={{
          display:{xs: 'flex', md: 'flex'},
          justifyContent: 'space-between',
          px: '30px',
          }}>
          <Box>
            {/* SMALL DEVICE */}
            <Box sx={{  
              display: { xs: 'flex', md: 'none' },
              width: '84px',
              height: '30px',
              background: '#d9d9d9',
              borderRadius: '10px',
            }}>
            </Box>
            {/* MEDIUM DEVICE */}
            <Box sx={{  
              display: { xs: 'none', md: 'flex' },
              width: '159px',
              height: '43px',
              background: '#d9d9d9',
              borderRadius: '10px',
            }}>
            </Box>
          </Box>

          {/* SMALL DEVICE */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                  <Link textAlign="center" sx={{backgroundColor: '#D9D9D9', width: '150px', height: '40px', paddingTop: '8px'}}>{page}</Link>
                </MenuItem>
              ))}
              <Box sx={{ display: { xs: 'block', md: 'none' }, }}>
                <ContainedButtons textAlign="center" />
              </Box>
            </Menu>
          </Box>

          {/* MEDIUM DEVICE */}
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
        }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ marginRight: '40px', color: 'white', display: 'block', textTransform: 'Capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ContainedButtons />
          </Box>

        </Toolbar>
        <Box sx={{
          mt: '80px',
          width: '600px',
          ml: '30px',
        }}>
        <Box sx={{
          display: {
            xs: 'none',
          }
        }}>
          <Typography variant="h3" component="h3" sx={{
            marginBottom: '10px',
          }}>
            OUR STORY
          </Typography>
          <Typography>
            If you want to know more about us, you’re in the right place. Read to learn how we can assist you
          </Typography>
        </Box>
        <Box sx={{
          display: {
            md: 'none',
          }
        }}>
          <Typography variant="h4" component="h4">
            OUR STORY
          </Typography>
        </Box>
         
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;