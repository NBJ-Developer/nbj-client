import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader'
import { useState, useEffect } from 'react'

export default function TitlebarImageList() {

  const [citiesImage, setCitiesImage] = useState([])
  useEffect(() =>{
    async function fetchData(){
    const response = await fetch('https://api.pexels.com/v1/search?query=cities&names', {
      method: 'GET',
      headers:{
        accept: 'application/json',
        Authorization:'563492ad6f91700001000001083a59be9f2e4044a60454881ea52e77',
      }
      
    })
    const dat = await response.json()
    console.log(dat)
    setCitiesImage(dat.photos)
  }
  fetchData()
  }, [])
  console.log(citiesImage)

  return (
    <ImageList cols={4} gap={20}>
        {citiesImage.map((item) => (
        <ImageListItem key={item.src.medium}>
          <img
            src={`${item.src.medium}?w=248&fit=crop&auto=format`}
            srcSet={`${item.src.medium}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div" sx={{
            textAlign:'center'
          }}>{'Abuja, Nigeria'}</ListSubheader>
        </ImageListItem>
        </ImageListItem>

      ))}
    </ImageList>
  );
}