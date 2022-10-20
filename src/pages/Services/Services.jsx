import * as React from 'react';
import GeneralHero from '../../components/Hero/GeneralHero'
import Box from '@mui/material/Box';
import ServiceHead from '../../components/Services/ServiceHead';
import ServiceSummary from '../../components/Services/ServiceSummary';
import ServiceCTA1 from '../../components/CallToAction/ServiceCTA1';
import ServiceList from '../../components/Services/ServiceList';
import ServiceCTA2 from '../../components/CallToAction/ServiceCTA2';
import Footer from '../../components/Footer/Footer'

function Services() {
  return (
    <Box>
      <GeneralHero />
      <ServiceHead />
      <ServiceSummary />
      <ServiceCTA1 />
      <ServiceList />
      <ServiceCTA2 />
      <Footer />
    </Box>
  )
}

export default Services