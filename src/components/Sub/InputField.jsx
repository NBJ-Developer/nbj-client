import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

function InputField({ content }) {
  
  const CssTextField = styled(TextField)({
    width: content.color === '#ffffff'? '50vw': '30vw',
    '& label.Mui-focused': {
      color: '#F9A020',
    },
    input: {
      color: content.color,
      fontFamily: 'inter',
    },
    label: {
      color: content.color,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#06133C',
      },
      '&:hover fieldset': {
        borderColor: '#F9A020',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#06133C',
      },
    },
  });

  return (
  <Box>
     <CssTextField
     label={content.label}
     size="small"
     sx={{
      mr: 1,
      fontFamily: 'inter',
     }}
     />
  </Box>
);
}

export default InputField
