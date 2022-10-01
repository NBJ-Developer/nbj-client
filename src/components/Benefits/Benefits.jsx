import * as React from 'react';
import Box from '@mui/material/Box';
import { BsCheck2Circle } from 'react-icons/bs'
import WVector from '../../assets/images/BBVector.png'
import Typography from '@mui/material/Typography';
import SubBenefits from './SubBenefits';


export default function Benefits() {
  return (
    <Box>
      {/* SMALL DEVICE */}
      <Box sx={{
        display: { xs: 'block', md: 'none' },
        marginTop: '170px',
        width: '100%'
      }}>
        <Box sx={{  
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <Box sx={{     
            width: '83%',
            backgroundColor: '#ffffff',
          }}>
            <Typography sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '23px',
              color: '#000000',
              textAlign: 'center'
            }} variant='h4'>
              WHAT YOU GET
            </Typography>

            <Box sx={{
              columnCount: '2',
              columnGap: '15px',
              marginTop: '25px'
            }}>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '20px',
                color: '#000000'
              }}>
                <BsCheck2Circle style={{
                  marginBottom: '-2px',
                  marginRight: '5px'
                }} />
                Safety Priority
              </Typography>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '20px',
                color: '#000000'
              }}>
                <BsCheck2Circle style={{
                  marginBottom: '-2px',
                  marginRight: '5px'
                }} />
                Customer Service & Comfort
              </Typography>
            </Box>

            <Box sx={{
              columnCount: '2',
              columnGap: '15px',
              margin: '23px 0 20px 8px'
            }}>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '20px',
                color: '#000000'
              }}>
                <BsCheck2Circle style={{
                  marginBottom: '-2px',
                  marginRight: '5px'
                }} />
                Convenience & Flexibility
              </Typography>
              <Typography sx={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '20px',
                color: '#000000'
              }}>
                <BsCheck2Circle style={{
                  marginBottom: '-2px',
                  marginRight: '5px'
                }} />
                Convenience & Flexibility
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}>
          <Box sx={{  
            width: '83%',
            backgroundColor: '#000000',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={WVector} 
            alt="" 
            style={{
              width: '35%',
              margin: '15px 0'
            }} 
          />
          </Box>
        </Box>
      </Box>
        {/* MEDIUM DEVICE */}
      <Box sx={{  
        display: {xs: 'none', md: 'block'}, 
        marginTop: '83px',
        width: '100%'
      }}>
          <Typography sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '23px',
            color: '#000000',
            textAlign: 'center'
          }}
          variant='h4'>
            WHAT YOU GET
          </Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '43px'
          }}>
            <Box sx={{  
              display: 'flex',
              alignItems: 'center',
              width: '90%',
            }}>
              <SubBenefits />
              <SubBenefits />
              <SubBenefits />
              <SubBenefits />
            </Box>
          </Box>
      </Box>
    </Box>
  );
}