import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

function ServicesLink({linkItem}) {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
        sx={{
          textDecoration: 'none',
          color: 'rgba(18, 24, 33, 0.9)',
        }}
      >
        {linkItem}
      </Link>
    </Box>
  )
}

export default ServicesLink