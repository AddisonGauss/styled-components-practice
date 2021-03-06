import React, { useState } from "react"
import {
  ImageCarouselContainer,
  ImageSliderCardBg,
  ImageSliderCardImageBg,
  ImageSliderCardWrapper,
  VideoBg,
  LeftArrow,
  RightArrow,
  ImageSliderCardContent,
  ImageSliderCardH1,
  ImageSliderCardP,
  ImageSliderLinkWrapper,
  ImageSliderCardLink,
  ImageSliderLinkBox,
  Row,
  Col,
} from "./ImageSliderElements"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { Container } from "react-bootstrap"

const CustomImageSlider = () => {
  const SliderData = [
    {
      image: "/images/wayfairbed.jpg",
    },
    {
      video: "/images/palm.mp4",
    },
  ]
  const [current, setCurrent] = useState(0)
  const length = SliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null
  }

  return (
    <ImageCarouselContainer>
      <LeftArrow
        visibility={current === 0 ? "hidden" : "visible"}
        onClick={prevSlide}
      />
      <RightArrow onClick={nextSlide} />
      {SliderData.map((slide, index) => (
        <ImageSliderCardBg
          className={index === current ? "slide active" : "slide"}
        >
          {current === 0 && (
            <ImageSliderCardContent>
              <ImageSliderCardH1>Make Home Your Happy Place</ImageSliderCardH1>
              <ImageSliderCardP>
                Start by exploring our top categories!
              </ImageSliderCardP>

              <ImageSliderLinkWrapper>
                <Row>
                  <Col>
                    <ImageSliderCardLink>Furniture</ImageSliderCardLink>
                    <ImageSliderCardLink>Lighting</ImageSliderCardLink>
                  </Col>
                  <Col>
                    <ImageSliderCardLink>Bath</ImageSliderCardLink>
                    <ImageSliderCardLink>Rugs</ImageSliderCardLink>
                  </Col>
                  <Col>
                    {" "}
                    <ImageSliderCardLink>Decor</ImageSliderCardLink>
                    <ImageSliderCardLink>Storage</ImageSliderCardLink>
                  </Col>
                </Row>
              </ImageSliderLinkWrapper>
            </ImageSliderCardContent>
          )}

          {index === current && slide.image && (
            <ImageSliderCardImageBg src={slide.image} />
          )}
          {index === current && slide.video && (
            <VideoBg src={slide.video} autoPlay loop muted type="video/mp4" />
          )}
        </ImageSliderCardBg>
      ))}
    </ImageCarouselContainer>
  )
}

export default CustomImageSlider
