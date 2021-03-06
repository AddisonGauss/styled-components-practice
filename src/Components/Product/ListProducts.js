import React from "react"
import { Card } from "react-bootstrap"
import {
  ListProductsContainer,
  ProductCard,
  ProductCardImg,
  ProductCardP,
  ProductH1,
  ProductSection,
} from "./ProductElements"

import { productList } from "./productList"
const ListProducts = () => {
  return (
    <ProductSection>
      <ProductH1>Shop by Department</ProductH1>
      <ListProductsContainer>
        {productList.map((product, item) => (
          <ProductCard key={product.id}>
            <ProductCardImg src={product.image} />
            <ProductCardP>{product.name}</ProductCardP>
          </ProductCard>
        ))}
      </ListProductsContainer>
    </ProductSection>
  )
}

export default ListProducts
