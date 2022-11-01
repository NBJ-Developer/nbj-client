import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ContainedButtons from '../../elements/Button/PrimaryButtons';

export default function ServicesCard({ content }) {
  return (
    <Card sx={{ 
        width: {xs: 500, md: 320},
        mr: {xs: 0, md:2},
        pb: {xs: 0, md: 2}, 
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={content.imgPath}
          alt={content.imgPath}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{
            fontFamily: 'Raleway',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '23px',
            letterSpacing: '0em',
            textAlign: 'center',
            
          }}>
            {content.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ContainedButtons buttonLabel={'Button'}/>
      </CardActions>
    </Card>
  );
}
