import * as React from 'react';
import GeneralHero from '../../components/Hero/GeneralHero'
import Box from '@mui/material/Box';
import ServiceSummary from '../../components/Services/ServiceSummary';
import ServiceList from '../../components/Services/ServiceList';
import Footer from '../../components/Footer/Footer'
import bgImage from './servicesBG.png'
import ServicesNavigations from '../../components/Services/ServicesNavigations';
import CallToAction from '../../components/CallToAction/CallToAction';
import ContactInfo from '../../components/Contact/ContactInfo';

function Services() {
  const content = {
    header: 'OUR STORY',
    body: `If you want to know more about us, you’re in the right place. 
    Read to learn how we can assist you`
  }
  const pages = ['Home', 'About', 'Services', 'Contact'];
  return (
    <Box>
      <GeneralHero bgImage={bgImage} content={content} pages={pages}/>
      <ServicesNavigations />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Box sx={{
        mt: 6,
        p: 1,
        width: '93vw',
        backgroundColor: '#ffffff',
      }}>
      <Box
        component="img"
        sx={{
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: '75vh',
        }}
        src={'servicesAirplain.png'}
        alt={'servicesAirplain.png'}
      />
      </Box>
      </Box>
      <ServiceSummary />
      <ServiceList />
      <CallToAction />
      <ContactInfo />
      <Footer />
    </Box>
  )
}

export default Services