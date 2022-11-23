import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion 
        sx={{
          background:'none',
          color:'#ffffff',
        }}
      >
        <Box sx={{
            mt: 2,
            '.Mui-expanded': {
              backgroundColor: '#F9A020',
              borderRadius: '15px 15px 0 0',
            },
            
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ 
            color:'#ffffff'
          }}
          />}
          id="panel1a-header"
        >
          <Typography sx={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: {xs: '14px', md: '18px'},
          lineHeight: {xs: '16px', md: '20px'},
          textAlign: 'justify',
          }}>Accordion 1 Lorem ipsum dolor sit amet</Typography>
        </AccordionSummary>
        </Box>
        
        <AccordionDetails>
          <Typography sx={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: {xs: '14px', md: '18px'},
          lineHeight: {xs: '16px', md: '20px'},
          textAlign: 'justify',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}