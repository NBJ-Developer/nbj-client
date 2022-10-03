import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function ServiceHead() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{
        display: {md: 'none', xs: 'flex'},
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        width: '100%'
      }}>
      <Box sx={{
          width: '80%',
          height: '37px',
          background: 'rgba(217, 217, 217, 0.5)',
          borderRadius: '7px 0px',
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px'
      }}>
          <FormControl>
              <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
              >
                  <FormControlLabel value="Service 1 Title" control={<Radio />} label="Service 1 Title" />
                  <FormControlLabel value="Service 2 Title" control={<Radio />} label="Service 2 Title" />
              </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      {/* MEDIUM DEVICE */}
      <Box sx={{
        display: {md: 'flex', xs: 'none'},
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '140px',
        width: '100%'
      }}>
        <Box sx={{
            width: '80%',
            height: '50px',
            background: 'rgba(217, 217, 217, 0.5)',
            borderRadius: '10px 0px',
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            paddingTop: '5px'
        }}>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="Service 1 Title" control={<Radio />} label="Service 1 Title" sx={{ px: 9}}/>
                    <FormControlLabel value="Service 2 Title" control={<Radio />} label="Service 2 Title" sx={{ px: 9}}/>
                    <FormControlLabel value="Service 3 Title" control={<Radio />} label="Service 3 Title" sx={{ px: 9}}/>
                    <FormControlLabel value="Service 4 Title" control={<Radio />} label="Service 4 Title" sx={{ px: 9}}/>
                </RadioGroup>
            </FormControl>
          </Box>
        </Box>
    </Box>
  )
}

export default ServiceHead