import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useInView } from "react-intersection-observer";
import { useEffect,  useState } from 'react';

function ServicesDetails({content, component}) {
  const { ref, inView } = useInView({
    /* Optional options */
  });
  const [count, setCount] = useState(0)
  const [doneCount, setDoneCount] = useState(false)

  let i = 1;   
  const myLoop = () => { 
    setTimeout(() => {         
      if (i < content.numb) {
        i++; 
        setCount(i)
        myLoop();             
      }                       
    }, 10)
    if (i === content.numb){
      setDoneCount(true)
    }else{
      setDoneCount(false)
    }
    
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 1,
    }}>
      {component}
        <Typography sx={{
          mb: 1,
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: {xs: '27px', sm: '28px', md:'30px'},
          color: '#0E1035',
        }}>
          {`${count}${content.plusSign && doneCount? content.plusSign: ''}`}
        </Typography>
        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: {xs: '12px', md: '24px'},
          lineHeight: {xs: '16px', md: '24px'},
          color: '#0E1035',
        }}>
          {content.body}
        </Typography>
      </Box>
    </div>
  )
}

export default ServicesDetails
