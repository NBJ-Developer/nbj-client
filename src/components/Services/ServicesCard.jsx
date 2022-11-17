import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import  CardActionArea from '@mui/material/CardActionArea';
import PrimaryButtons from '../../elements/Button/PrimaryButtons';

export default function ServicesCard({ content }) {
  return (
    <Card sx={{ 
        width: {xs: 500, md: 320},
        height: '90%',
        mr: {xs: 0, md:2},
        pb: {xs: 0, md: 2}, 
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={content.imgPath}
          alt={content.imgPath}
          style={{
            height: '250px',
          }}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: content.justify === 'left'? '26px': '20px',
            lineHeight: '23px',
            textAlign: content.justify === 'left'? 'left': 'center',
          }}>
            {content.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
        display: !content.buttonDisplay?'none': 'flex',
        justifyContent: content.justify === 'left'? 'left': 'center',
      }}>
        <PrimaryButtons buttonLabel={'Button'}/>
      </CardActions>
    </Card>
  );
}
