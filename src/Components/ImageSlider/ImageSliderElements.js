import styled from "styled-components/macro"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { Link as LinkScroll } from "react-scroll"
import { Link as LinkRouter } from "react-router-dom"

export const ImageCarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 870px;
  max-height: 540px;
  height: 50vw;
  min-height: 275px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 3%;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  visibility: ${(props) => props.visibility || "visible"};

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

export const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 3%;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

export const ImageSliderCardWrapper = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;

  &.active,
  &.hover,
  &.focus {
    outline: none;
    border: none;
  }
`

export const ImageSliderCard = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  max-width: 100%;
`

export const ImageSliderCardBg = styled.div`
  position: absolute;
  background: #3a7257;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`

export const ImageSliderCardImageBg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: fill;
  -o-object-fit: fill;
  border-radius: 10px;
`

export const ImageSliderCardContent = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  max-width: 65%;
  z-index: 3;
  position: absolute;
`

export const ImageSliderCardH1 = styled.h1`
  font-size: 2.5rem;
  color: #800080;
  font-size: bold;
  text-align: center;

  @media screen and (max-width: 1006px) {
    font-size: 2.2em;
  }

  @media screen and (max-width: 690px) {
    font-size: 1.8em;
  }
  @media screen and (max-width: 565px) {
    font-size: 1.4em;
  }

  @media screen and (max-width: 480px) {
    font-size: 1em;
  }
`

export const ImageSliderCardP = styled.p`
  margin-top: 8px;
  color: #000;
  font-size: 22px;
  text-align: center;
  max-width: 600px;
  font-weight: 600;

  @media screen and (max-width: 690px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const ImageSliderLinkWrapper = styled.div`
  position: absolute;

  margin-left: 1vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-lines: 2;
  width: 90%;
`
export const ImageSliderCardLink = styled(LinkRouter)`
  color: #000;
  font-size: 22px;
  padding: 15px;

  @media screen and (max-width: 690px) {
    font-size: 16px;
    padding: 5px;
  }
`

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`
