import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputField({ label }) {return (
  <Box>
    <TextField id="outlined-basic" label={label} variant="outlined" sx={{
      fontFamily: 'Hind',
      width: '30vw',
      mr: 1,
    }}/>
  </Box>
);
}

export default InputField
