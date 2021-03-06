import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ImageSliderCardWrapper } from "./ImageSliderElements"

import {
  SalesCard,
  SalesCardBg,
  SalesCardImageBg,
  SalesCardP,
  SalesCardBody,
  SalesCardImageContainer,
  SalesCardContentOverPicture,
  SalesCardBtnWrap,
  Button,
} from "../SalesCards/SalesCardsElements"

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const data = [
    {
      id: 1,
      image: "/images/wayfairtowels.jpg",
      textLine1: "100% cotton sheets",
      textLine2: "100% comfy sleep",
      description: "Choose from tons of colors and prints.",
      lightText: false,
    },
    {
      id: 2,
      image: "/images/wayfairchairs.jpg",
      textLine1: "Need a lift? Browse bar",
      textLine2: "stools under $99",
      description: "Upgrade your kitchen island for less.",
      lightText: false,
    },
    {
      id: 3,
      image: "/images/wayfairplates.jpg",
      textLine1: "Best-selling",
      textLine2: "kitchen brands",
      description: "Get all the essentials, shipped fast.",
      lightText: true,
    },
    {
      id: 4,
      image: "/images/wayfaircups.jpg",
      textLine1: "Need a drink? Browse cups",
      textLine2: "under $20",
      description: "Upgrade your cups for less.",
      lightText: false,
    },
    {
      id: 5,
      image: "/images/wayfairheadboard.jpg",
      textLine1: "Top-rated headboards",
      textLine2: "under $150",
      description: "Browse styles rated four stars and up.",
      lightText: false,
    },
  ]

  return (
    <Slider {...settings}>
      {data.map((cardData) => (
        <ImageSliderCardWrapper key={cardData.id}>
          <SalesCard>
            <SalesCardImageContainer>
              <SalesCardBg>
                <SalesCardImageBg src={cardData.image} />
              </SalesCardBg>
              <SalesCardContentOverPicture>
                <SalesCardP lightText={cardData.lightText} fontWeight="600">
                  {cardData.textLine1}
                  <br />
                  {cardData.textLine2}
                </SalesCardP>
              </SalesCardContentOverPicture>
            </SalesCardImageContainer>
            <SalesCardBody>
              <SalesCardP fontSize="1" textAlign="center">
                {cardData.description}
              </SalesCardP>
            </SalesCardBody>
          </SalesCard>
        </ImageSliderCardWrapper>
      ))}
    </Slider>
  )
}

export default ImageSlider
