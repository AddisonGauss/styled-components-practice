import styled from "styled-components/macro"
import { Link as LinkScroll } from "react-scroll"
import { Link as LinkRouter } from "react-router-dom"

export const SalesCardsContainer = styled.div`
  //position: relative;
  height: 400px;
  width: 90vw;
  min-height: 275px;
  display: block;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`

export const SalesCardsWrapper = styled.div`
  display: grid;
  margin: 0 auto;

  width: 100%;
`

export const SalesCardsRow = styled.div`
  display: grid;
  grid-template-columns: minmax() (auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const ColumnCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 375px;
  @media screen and (max-width: 480px) {
    width: 240px;
  }
`

export const SalesCard = styled.a`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 10px;
  height: 250px;
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight || "250"}px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale() (1.5);
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
    box-shadow: 0 3px 6px rgb(34 25 36 / 20%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    height: 70vw;
  }
`

export const SalesCardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  color: #000;
  font-weight: 400;
  font-size: 16px;
  padding: 0.5rem;
  height: 500px;
  width: 100%;
`

export const SalesCardBg = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const SalesCardImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  -o-object-fit: fill;
`

export const SalesCardContentOverPicture = styled.div`
  position: absolute;
  z-index: 1;
`

export const SalesCardBody = styled.div`
  width: 100%;
  padding: 8px 0;
`
export const SalesCardH1 = styled.h1`
  font-size: 3rem;
  color: #000;
  margin-bottom: 1rem;
  font-size: bold;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`
export const SalesCardH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;

  color: #fff;

  @media screen and (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

export const SalesCardP = styled.p`
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || 1.2}rem;
  text-align: ${({ textAlign = "left" }) => textAlign};
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 327px) {
    font-size: 12px;
  }
`
export const SalesCardBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Button = styled(LinkRouter)`
  border-radius: 50px;
  background: #3a7257;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  letter-spacing: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #60ce29;
    color: #fff;
    text-decoration: none;
  }
`
