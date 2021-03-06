import React from "react"
import Slider from "react-slick"
import CustomImageSlider from "../Components/ImageSlider/CustomImageSlider"
import ImageSlider from "../Components/ImageSlider/ImageSlider"
import { ImageCarouselContainer } from "../Components/ImageSlider/ImageSliderElements"
import ListProducts from "../Components/Product/ListProducts"
import {
  SalesCardsContainer,
  SalesCardsRow,
  SalesCardsWrapper,
  SalesCard,
  SalesCardBg,
  SalesCardH1,
  SalesCardH2,
  SalesCardImageBg,
  SalesCardP,
  Column1,
  Column2,
  SalesCardBody,
  SalesCardImageContainer,
  SalesCardContentOverPicture,
  SalesCardBtnWrap,
  Button,
} from "../Components/SalesCards/SalesCardsElements"
import {
  AdvertisementSectionContainer,
  AdvertisementSectionWrapper,
  AdvertisementSectionRow,
  AdvertisementSectionColumn1,
  AdvertisementSectionColumn2,
  AdvertisementSectionRow2,
  AdvertisementSectionSalesCardRow,
  AdvertisementSectionSalesCardRowImageCarousel,
} from "./AdvertisementElements"

const column2Data = [
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
]

const row2Data = [
  {
    id: 1,
    image: "/images/wayfairplates.jpg",
    textLine1: "Best-selling",
    textLine2: "kitchen brands",
    description: "Get all the essentials, shipped fast.",
    lightText: true,
  },
  {
    id: 2,
    image: "/images/wayfaircups.jpg",
    textLine1: "Need a drink? Browse cups",
    textLine2: "under $20",
    description: "Upgrade your cups for less.",
    lightText: false,
  },
  {
    id: 3,
    image: "/images/wayfairheadboard.jpg",
    textLine1: "Top-rated headboards",
    textLine2: "under $150",
    description: "Browse styles rated four stars and up.",
    lightText: false,
  },
]
const AdvertisementSection = () => {
  return (
    <>
      <AdvertisementSectionContainer>
        <AdvertisementSectionWrapper>
          <AdvertisementSectionRow>
            <AdvertisementSectionColumn1>
              <CustomImageSlider />
            </AdvertisementSectionColumn1>

            <AdvertisementSectionColumn2>
              {column2Data.map((data) => (
                <SalesCard key={data.id}>
                  <SalesCardImageContainer>
                    <SalesCardBg>
                      <SalesCardImageBg src={data.image} />
                    </SalesCardBg>
                    <SalesCardContentOverPicture>
                      <SalesCardP lightText={data.lightText} fontWeight="600">
                        {data.textLine1} <br /> {data.textLine2}
                      </SalesCardP>
                    </SalesCardContentOverPicture>
                  </SalesCardImageContainer>
                  <SalesCardBody>
                    <SalesCardP fontSize="1" textAlign="center">
                      {data.description}
                    </SalesCardP>
                  </SalesCardBody>
                </SalesCard>
              ))}
            </AdvertisementSectionColumn2>
          </AdvertisementSectionRow>

          <AdvertisementSectionRow2>
            <AdvertisementSectionSalesCardRow>
              {row2Data.map((data) => (
                <SalesCard key={data.id} maxHeight="200">
                  <SalesCardImageContainer>
                    <SalesCardBg>
                      <SalesCardImageBg src={data.image} />
                    </SalesCardBg>
                    <SalesCardContentOverPicture>
                      <SalesCardP lightText={data.lightText} fontWeight="600">
                        {data.textLine1} <br /> {data.textLine2}
                      </SalesCardP>
                    </SalesCardContentOverPicture>
                  </SalesCardImageContainer>
                  <SalesCardBody>
                    <SalesCardP fontSize="1" textAlign="center">
                      {data.description}
                    </SalesCardP>
                  </SalesCardBody>
                </SalesCard>
              ))}
            </AdvertisementSectionSalesCardRow>

            <AdvertisementSectionSalesCardRowImageCarousel>
              {" "}
              <SalesCardsContainer>
                <ImageSlider />
              </SalesCardsContainer>
            </AdvertisementSectionSalesCardRowImageCarousel>
          </AdvertisementSectionRow2>
        </AdvertisementSectionWrapper>
      </AdvertisementSectionContainer>

      <ListProducts />
    </>
  )
}

export default AdvertisementSection
