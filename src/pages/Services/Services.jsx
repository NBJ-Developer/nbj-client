import * as React from 'react';
import GeneralHero from '../../components/Hero/GeneralHero'
import Box from '@mui/material/Box';
import ServiceSummary from '../../components/Services/ServiceSummary';
import ServiceList from '../../components/Services/ServiceList';
import Footer from '../../components/Footer/Footer'
import bgImage from './servicesBG.png'
import CallToAction from '../../components/CallToAction/CallToAction';
import ContactInfo from '../../components/Contact/ContactInfo';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from "@mui/material/styles";

function Services() {
  const content = {
    header: 'SERVICES',
    body: `If you want to know more about our services, you’re in the right place. 
    Read to learn how we can be of service to you.`
  }
  const pages = ['Home', 'About', 'Services', 'Contact'];

  const serviceSummary = [
    `Ground support service is n integral part of airline operations 
    and a prominent role as we are tasked with ensuring the safety and 
    comfort of the passengersas they prepare for take-off and landing. 
    NBJ’s highly skilled ground handlers  are fully equipped to provide 
    these range of services to the flight on ground. Our dedicated team is 
    ready to provide to provide efficient ground support and assist guests 
    and passengers with any flight related arrangement.`,

    `NBJ provides a range of aircraft available for charter. We provide reliable 
    and trust-worthy air charter services for clients who wish to journey for 
    business or personal purpose. We value your comfort and privacy and ensure 
    discreetness in our service to you. Charter aircrafts and book commercial tickets 
    for local and international flights with our Aircraft charter and Booking service.`,

    `NBJ’s qualified and highly trained Pilots, Co-Pilots and Flight attendants are 
    experienced, amiable and assertive cabin crew members charged with the safety and 
    comfort of our clients throughout the flight. We provide cabin crew members who aim 
    to give maximum satisfaction to our clients. We ensure cabin crew members are well 
    prepared before take-off and after landing of our flights for quality service.`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ultricies malesuada 
    urna faucibus consectetur neque, a tristique aenean. Velit egestas semper interdum massa 
    condimentum imperdiet vulputate. Laoreet suspendisse nulla sem sed fusce. Enim, sit euismod 
    proin egestas fames dui. Mi cursus enim, interdum bibendum scelerisque tincidunt egestas. 
    Dolor mattis diam at non libero ut. Amet sed volutpat pharetra placerat lacinia convallis 
    dignissim est. Lacinia dis porta ac dui. Vestibulum amet elementum ultrices feugiat pulvinar. 
    Arcu urna posuere a sit. Tellus sit sollicitudin integer pretium metus semper mus iaculis. 
    Augue laoreet tincidunt elit nunc rhoncus bibendum diam. Diam sapien, vel, volutpat ligula eu, 
    a vestibulum. Quis rhoncus, tincidunt mattis dis nec.`
  ]

  const listItems = [[
    `Flight Dispatch: Efficient and accurate flight plan, information 
    and necessary permissions to enable smooth travels. `,
    'Refuelling ',
    `Permits: These permits include local and international landing and 
    over-flight permits.  `,
    'Passenger and Luggage Handling',
    'Marshalling and Parking',
],

[
    'Aircraft Charter ',
    'Commercial Airline Bookings (Local and International Flights)',
    'Empty Legs',
],

[
    'Crew Transportation',
    'Hotel Bookings and Reservation',
],

[
    'Transportation Arrangement',
    'Hotel Bookings and Reservation',
    'In-flight Catering',
]

]

const Image = [
  'ground_support.png',
  'airport_charter.png',
  'crew_services.png',
  'servicesAirplain.png'
]

const Alt = [
  'ground_support.png',
  'airport_charter.png',
  'crew_services.png',
  'servicesAirplain.png'
]

const Image2 = [
  'servicesAirplain1.png',
  'servicesAirplain1.png',
  'service2.png',
  'hospitality_services.png'
]

  const linkItem = ['Ground Support', 'Airport Charter & Bookings', 'Crew Services', 'Hospitality Services']

  const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "#F9A020"
  }
});
   const [index, setIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };


  return (
    <Box>
      <GeneralHero bgImage={bgImage} content={content} pages={pages}/>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box sx={{ bgcolor: '#FFFFFF', width: '90%', marginTop: 6, borderRadius: '12px', }}>
        <Tabs
          value={index}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#F9A020',
            },
          }}
        >
          {linkItem.map((item, index) => (
          <StyledTab label={item} key={index}/>
        ))}
        </Tabs>
    </Box>
      </Box>
      
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
        src={Image[index]}
        alt={Alt[index]}
      />
      </Box>
      </Box>
      <ServiceSummary serviceSummary={serviceSummary[index]}/>
      <ServiceList listItems={listItems[index]}/>
      <CallToAction />
      <ContactInfo />
      <Footer />
    </Box>
  )
}

export default Services