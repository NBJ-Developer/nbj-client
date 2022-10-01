import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Wvector from '../../assets/images/BBVector.png'
import servicesData from './servicesData';

export default function SubServices() {

  return (
        <Box sx={{  
            width: '22%',
            background: '#000000',
            borderRadius: '7.3516px',
            margin: '0 25px',
        }}>
            <img src={Wvector} 
            alt="" 
            className='wvector'
            style={{
                width: '75%',
                marginTop: '20px'
            }}/>
            {servicesData.map((item)=> {
                return (
            <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '27px',
                color: '#ffffff',
                margin: '106px 0 50px 0'
            }}>
                {item.name}
            </Typography>
            )
            })}
            
        </Box>
  );
}