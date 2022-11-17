import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputField({ label }) {return (
  <Box>
    <TextField id="outlined-basic" label={label} variant="outlined" size="small" sx={{
      fontFamily: 'inter',
      width: '30vw',
      mr: 1,
      '&:focus': {
        opacity: [0.9, 0.8, 0.7],
        color: '#F9A020',
        border: '3px solid #F9A020',
      },
    }}/>
  </Box>
);
}

export default InputField
