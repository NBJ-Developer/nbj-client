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
      width: {xs: '100%', md: 320},
      height: {xs: '90%', md: '67vh'},
      pb: {xs: 0, md: 2}, 
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={content.imgPath}
          alt={content.imgPath}
          style={{
            height: '250px',
            objectFit: 'fill',
          }}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{
            font: 'Open Sans',
            fontWeight: '600',
            fontSize: {xs: '18px', sm: '19px',  md: '20px'},
            lineHeight: {xs: '28px', sm: '32px',  md: '25px'},
            textAlign: content.justify === 'left'? 'left': 'center',
          }}>
            {content.label}
          </Typography>
          <Typography sx={{
            font: 'Open Sans',
            textAlign: 'center',
            fontWeight: '400',
            fontSize: {xs: '12px', sm: '13px', md: '14px'},
            lineHeight: {xs: '23px', sm: '25px', md: '18px'},
            textAlign: content.justify === 'left'? 'left': 'center',
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
          <PrimaryButtons buttonLabel={'Button'}/>
        </Box>
        <Box sx={{
          display: content.buttonDisplay === 'secondary'? 'block': 'none'
        }}>
          <SecondaryButton buttonLabel={'Button'}/>
        </Box>
      </CardActions>
    </Card>
  );
}
