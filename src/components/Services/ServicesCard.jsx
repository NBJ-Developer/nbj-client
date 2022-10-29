import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ContainedButtons from '../../elements/Button/ContainedButtons';

export default function ServicesCard({ content }) {
  return (
    <Card sx={{ 
        maxWidth: 320,
        mr: 2, 
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={content.imgPath}
          alt={content.imgPath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
