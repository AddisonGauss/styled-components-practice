import styled from "styled-components/macro"

export const AdvertisementSectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  color: #000;
  background: #f6f6f6;
  margin: 8px;
  height: 100vh;

  @media screen and (max-width: 900px) {
    height: 100%;
  }
`
export const AdvertisementSectionWrapper = styled.div`
  display: grid;
  max-height: 550px;
  width: 90vw;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 800px) {
    height: 100%;
  }
`
export const AdvertisementSectionRow = styled.div`
  display: grid;
  grid-template-columns: 55% 1fr;
  grid-template-rows: repeat(minmax(540px, 300px));
  grid-template-areas: "col1 col2";
  grid-column-gap: 0.5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-areas: "col1 col1" "col2 col2";
  }
`
export const AdvertisementSectionRow2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

export const AdvertisementSectionColumn1 = styled.div`
  margin-bottom: 15px;

  grid-area: col1;
`

export const AdvertisementSectionColumn2 = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    margin-bottom: 15px;

    grid-area: col2;
  }
`

export const AdvertisementSectionSalesCardRow = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
    width: 100%;
  }
`

export const AdvertisementSectionSalesCardRowImageCarousel = styled.div`
  grid-area: col2;
  display: flex;
  width: 100%;
  margin-bottom: 50px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`
