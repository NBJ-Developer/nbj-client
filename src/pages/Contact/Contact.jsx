import * as React from 'react';
import Box from '@mui/material/Box';
import GeneralHero from '../../components/Hero/GeneralHero'
import ContactMessage from '../../components/Contact/ContactMessage';
import Question from '../../components/About/Question';
import Footer from '../../components/Footer/Footer';


function Contact() {
  return (
    <Box>
      <GeneralHero />
      <ContactMessage />
      <Question />
      <Footer />
    </Box>
  )
}

export default Contact