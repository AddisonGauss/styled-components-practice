import styled from "styled-components/macro"

export const ProductSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
`
export const ListProductsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1600px;
  justify-content: center;
  align-items: stretch;
  background: #f6f6f6;
  margin: 0 auto;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0.5rem;
  max-width: 300px;
  padding: 0.5rem;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    transform: scale() (1.5);
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
    box-shadow: 0 3px 6px rgb(34 25 36 / 20%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ProductCardImg = styled.img`
  /* border-radius: 10px; */
  border-radius: 50%;
  width: 100%;
  height: 250px;
  object-fit: cover;
  -o-object-fit: cover;
`
export const ProductH1 = styled.h1`
  color: #000;
  font-weight: 600;
  text-align: center;
`
export const ProductCardP = styled.p`
  color: #000;
  font-weight: 600;
`
