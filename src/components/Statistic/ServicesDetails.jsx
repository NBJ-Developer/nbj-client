import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useInView } from "react-intersection-observer";
import { useEffect,  useState } from 'react';

function ServicesDetails({content}) {
  const { ref, inView } = useInView({
    /* Optional options */
  });
  const [count, setCount] = useState(0)

  let i = 1;   
  const myLoop = () => { 
    setTimeout(() => {         
      if (i < content.numb) {
        i++; 
        setCount(i)
        myLoop();             
      }                       
    }, 1)
  }
  useEffect(() => {
    if (inView){
      myLoop()
    }else{
      setCount(0)
    }
  }, [inView])
  return (
    <div ref={ref}>
      <Box sx={{
    }}>
        <Typography sx={{
          mb: 1,
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: {xs: '30px', md:'78px'},
          lineHeight: {xs: '40px', md: '91px'},
          textAlign: 'center',
          color: '#0E1035',
        }}>
          {`${count}${content.plusSign? content.plusSign: ''}`}
        </Typography>
        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: {xs: '12px', md: '24px'},
          lineHeight: {xs: '16px', md: '24px'},
          textAlign: 'center',
          color: '#0E1035',
        }}>
          {content.body}
        </Typography>
      </Box>
    </div>
  )
}

export default ServicesDetails
