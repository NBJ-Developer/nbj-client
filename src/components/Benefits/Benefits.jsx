import * as React from 'react';
import Box from '@mui/material/Box';
import './Benefits.css'
import { BsCheck2Circle } from 'react-icons/bs'

export default function Benefits() {
  return (
    <Box
      sx={{ display: { xs: 'block', md: 'none' },
        width: 315,
        height: 269,
        backgroundColor: '#ffffff',
        margin: '160px 0 0 25px'

      }}>
        <p className='what_you'>WHAT YOU GET</p>
        <div className='div_column'>
            <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
            <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
        </div>
        <div className='div_column_2'>
            <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
            <p className='div_column_text'><BsCheck2Circle className='check' /> Sapien phasellus</p>
        </div>

        <Box sx={{
            width: 315,
            height: 144,
            backgroundColor: '#000000',
            borderRadius: '10px',
            marginTop: '20px'
        }}></Box>
      </Box>
  );
}