import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

function InputField({ content }) {
  
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: {xs: '12px', sm: '13px', md: '14px'},
      lineHeight: {xs: '23px', sm: '25px', md: '27px'},
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
      font: 'Open Sans',
      fontWeight: '400',
      fontSize: {xs: '12px', sm: '13px', md: '14px'},
      lineHeight: {xs: '23px', sm: '25px', md: '27px'},
      width: {xs: '80vw', md: '30vw'},
      mr: 1,
      mb: 2, 
     }}
     />
  </Box>
);
}

export default InputField
