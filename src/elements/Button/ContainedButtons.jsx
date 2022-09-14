import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './ContainedButtons.css'

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" className='but' sx={{ 
        backgroundColor: '#ffffff',
        color: 'black',
        textTransform: 'Capitalize',
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px'
        }}>
        Button
      </Button>
    </Stack>
  );
}