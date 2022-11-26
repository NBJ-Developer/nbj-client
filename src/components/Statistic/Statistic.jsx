import { Grid } from '@mui/material'
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
      width: {xs: '90%', md: '90%'},
      px: 3,
      mx: 4,
      display: 'flex',
      justifyContent: 'space-between',
      py: {xs: 2, md: 4},
    }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <ServicesDetails content={statisticContent[0]}/>
        </Grid>
        <Grid item xs={6} md={3}>
          <ServicesDetails content={statisticContent[1]}/>
        </Grid>
        <Grid item xs={6} md={3}>
          <ServicesDetails content={statisticContent[2]}/>
        </Grid>
        <Grid item xs={6} md={3}>
          <ServicesDetails content={statisticContent[3]}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Statistic
