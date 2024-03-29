import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import  CardActionArea from '@mui/material/CardActionArea';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';
import SecondaryButton from '../../elements/Button/SecondaryButton';
import { Box } from '@mui/material';

export default function ServicesCard({ content }) {
  return (
    <Card sx={{
      position: 'relative',
      width: {xs: '100%', sm: '100%', md: 320},
      height: !content.buttonDisplay? 'auto': {xs: '90%', md: 'auto'},
      pb: {xs: 0, md: 2}, 
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={content.imgPath}
          alt={content.imgPath}
          style={{
            objectFit: 'cover',
            height: !content.buttonDisplay? 'auto': '40vh',
          }}
        />
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Typography gutterBottom component="div" 
          sx={{
            font: 'Raleway',
            fontWeight: '600',
            fontSize: '2.1vh',
            lineHeight: '2.6vh',
            textAlign: content.justify === 'left'? 'left': 'center',
          }}>
            {content.label}
          </Typography>
          <Typography sx={{
            font: 'inter',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: '1.8vh',
            lineHeight:  '2vh',
            mb: 1,
          }}>
            {content.post}
          </Typography>
          <Typography sx={{
            font: 'inter',
            fontWeight: '400',
            fontSize: '1.8vh',
            lineHeight: '2vh',
            textAlign: content.justify === 'left' || !content.buttonDisplay? 'left': 'center',
          }}>
            {content.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
        display: !content.buttonDisplay?'none': 'flex',
        justifyContent: content.justify === 'left'? 'left': 'center',
      }}>
        <Box sx={{
          display: content.buttonDisplay === 'primary'? 'block': 'none'
        }}>
          <PrimaryButtons buttonLabel={content.primaryButton} link={content.link}/>
        </Box>
        <Box sx={{
          display: content.buttonDisplay === 'secondary'? 'block': 'none'
        }}>
          <SecondaryButton buttonLabel={content.secondaryButton}/>
        </Box>
      </CardActions>
    </Card>
  );
}
