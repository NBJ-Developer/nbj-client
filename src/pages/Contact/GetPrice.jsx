import * as React from 'react';
import Box from '@mui/material/Box';
import GeneralHero from '../../components/Hero/GeneralHero'
import ContactMessage from '../../components/Contact/ContactMessage';
import Typography from '@mui/material/Typography';
import bgImage from './contactBG.png'
import Footer from '../../components/Footer/Footer';
import ContactInfo from '../../components/Contact/ContactInfo';
import { ContactUs } from '../../components/Contact/ContactUs';


function Contact() {
  const content = {
    header: 'CONTACT US',
    body: `If you want to know more about our services, you’re in the right place. 
    Write to us and we will be sure to answer all your questions and give you a 
    comprehensive consultation.`
  }
  const pages = ['Home', 'About', 'Services', 'Contact'];
  return (
    <Box>
      <GeneralHero display={true} bgImage={bgImage} content={content} pages={pages}/>
      <Box sx={{
        display: {xs: 'flex', md: 'none'},
        justifyContent: 'center',
        width: '100%',
        marginTop: '20px'
      }}>
        <Box sx={{
          width: '80%',
        }}>
          <Typography sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '17.7px',
            color: '#000000',
            textAlign: 'center'
          }}>
          If you want to know more about our services, you’re in the right place. 
          Write to us and we will be sure to answer all your questions and give you 
          a comprehensive consultation.
          </Typography>
        </Box>
      </Box>
      <ContactMessage />
      <ContactInfo />
      <Footer />
    </Box>
  )
}

export default Contact