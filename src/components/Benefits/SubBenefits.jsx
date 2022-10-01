import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WVector from '../../assets/images/BBVector.png'
import benefitsData from './benefitsData';


export default function SubBenefits() {

  return (
    <Box sx={{  
        width: '23%',
        textAlign: 'center',
        margin: '0 20px',
      }}>
        <Box sx={{
          width: '40%',
          height: '120px',
          backgroundColor: '#000000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '90px',
          borderRadius: '4px'
        }}>
          <img src={WVector} 
            alt="" 
            className='sw_vector'
            style={{
              width: '38%',
            }} 
          />
        </Box>
        {benefitsData.map((item)=>{
          return (
              <div>
                  <Typography sx={{
                      fontFamily: 'Raleway',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '17px',
                      lineHeight: '23px',
                      color: '#000000',
                      textAlign: 'center',
                      marginTop: '19px'
                  }}>
                      {item.name}
                  </Typography>
                  <Typography sx={{
                      fontFamily: 'Raleway',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(0, 0, 0, 0.9)',
                      textAlign: 'center',
                      marginTop: '3px'
                  }}>
                      {item.para}
                  </Typography>
                </div>
            )
        })}
      </Box>
  );
}