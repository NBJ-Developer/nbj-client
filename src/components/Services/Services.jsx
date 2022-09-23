import * as React from 'react';
import Box from '@mui/material/Box';
import './Services.css'



export default function OurStory() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{  display: {xs: 'block', md: 'none'}}}></Box>

      {/* MEDIUM DEVICE */}
      <Box sx={{  display: {xs: 'none', md: 'block'}}}></Box>

    </Box>
  );
}