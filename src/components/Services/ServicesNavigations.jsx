import { Box } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: '23vw',
    border: '1px solid #dadde9',
  },
});

function ServicesNavigations() {
  const linkItem = [
    {title: 'Ground Support', body: `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    `},
    {title: 'Airport Charter & Bookings', body: `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    `},
    {title: 'Crew Services', body: `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    `},
    {title: 'Hospitality Services', body: `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
    Praesent non nunc mollis, fermentum neque at, semper arcu.
    Nullam eget est sed sem iaculis gravida eget vitae justo.
    `},
    
  ]
  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 6,
      }}>
        <Box sx={{
          px: 2,
          py: 1,
          width: '80vw',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}>
        {linkItem.map((item, index) => (
          <div key={index}>
          <CustomWidthTooltip title={item.body}>
            <Link activeClassName="active" to="/some-route">{item.title}</Link>
          </CustomWidthTooltip>
        </div>
        ))}
        
      </Box>
      </Box>
      
    </div>
  )
}

export default ServicesNavigations
