import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

function InputField({ content }) {
  
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      fontSize: {xs: '12px', md: '18px'},
      lineHeight: {xs: '18px', md: '24px'},
      color: '#F9A020',
    },
    input: {
      color: '#262626',
      fontFamily: 'inter',
    },
    label: {
      color: '#262626',
      fontSize: '12px',
    },
    
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: content.color === '#ffffff'? '#f1f3fb': '#06133C',
      },
      '&:hover fieldset': {
        borderColor: '#F9A020',
      },
      '&.Mui-focused fieldset': {
        borderColor: content.color === '#ffffff'? '#f1f3fb': '#06133C',
      },
    },
  });

  return (
  <Box>
     <CssTextField
     label={content.label}
     size="small"
     sx={{
      width: {xs: '80vw', md: '30vw'},
      mr: 1,
      mb: 2, 
      fontFamily: 'inter',
     }}
     />
  </Box>
);
}

export default InputField
