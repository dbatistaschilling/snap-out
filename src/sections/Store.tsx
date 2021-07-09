import React from 'react'
import {
  PageBtn,
  PageContent,
  SectionTitle,
  WooCommerce
} from '../components'

export const StoreSection = () =>
<PageContent rowClasses={"mb-40"} pageBtn={<PageBtn url={"#"} text={"Visit the store"} />}>
  <SectionTitle title={"Featured store items"} />
  <WooCommerce
      products={[
          {
              url: "#",
              imgPath: "img/shop/shop-item-02.jpg",
              name: "rock ‘n roll",
              currency: "$",
              price: "40"
          },
          {
              url: "#",
              imgPath: "img/shop/shop-item-03.jpg",
              name: "rock star",
              currency: "$",
              price: "40"
          },
          {
              url: "#",
              imgPath: "img/shop/shop-item-04.jpg",
              name: "live at berlin",
              currency: "$",
              price: "40"
          },
          {
              url: "#",
              imgPath: "img/shop/shop-item-05.jpg",
              name: "Champs Shirt",
              currency: "$",
              price: "40"
          },
      ]}
  />
</PageContent>