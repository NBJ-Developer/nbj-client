import Paper from '@mui/material/Paper'
import React from 'react'
import ServicesDetails from './ServicesDetails'

function Statistic() {

  const statisticContent = [
    {
     numb: 500,
     plusSign: 'K+',
     body: 'Total flights', 
    },
    {
      numb: 0,
      body: 'Flight crash', 
     },
     {
      numb: 250,
      body: 'Destination', 
     },
     {
      numb: 10,
      plusSign: 'K+',
      body: 'Total Passengers', 
     },
  ]

  return (
    <Paper sx={{
    width: '90%',
    px: 3,
    display: {xs: 'none', md: 'flex'},
    justifyContent: 'space-between',
    paddingY: '30px',
  }}>
      <ServicesDetails content={statisticContent[0]}/>
      <ServicesDetails content={statisticContent[1]}/>
      <ServicesDetails content={statisticContent[2]}/>
      <ServicesDetails content={statisticContent[3]}/>
    </Paper>
  )
}

export default Statistic
