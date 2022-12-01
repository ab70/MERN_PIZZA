import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.css'

// import carousel data
import { bannerData } from './Carouseldata';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
   // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
     // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // optional, default to 1.
  }
};

export default function HomeCarousel() {
  return (
    <>
    <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
     
      autoPlaySpeed={1000}
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
    {
      bannerData.map(data=>(
        <img className='bannerImg' src={data.url} alt='banner' />
      ))
    }
    </Carousel>
    
    </>
    
    
  )
}
