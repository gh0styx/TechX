import * as React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import MainPage from "@/components/MainPage";

import ProductCards from "@/components/ProductsCards";
import Nav from "@/components/Nav";
import Catalog from "@/components/buttons/Catalog";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Nav />

      <MainPage />

      <div className="mt-[200px] flex flex-row justify-start flex-wrap">
        <ProductCards
          image="https://jabko.ua/image/cache/catalog/products/2022/09/072253/photo_2022-09-07_22-53-30%20(1)-300x300.jpg"
          title="IPHONE 14 PRO MAX"
          price="1200"
        />
        <ProductCards
          image="https://jabko.ua/image/cache/catalog/products/2022/09/072342/MQD83%20(1)-300x300.jpg"
          title="AIRPODS PRO"
          price="250"
        />
        <ProductCards
          image="https://jabko.ua/image/cache/catalog/products/2022/06/201902/mbp14-spacegray-gallery1-202110-300x300.jpg"
          title="MACBOOK PRO 14"
          price="2000"
        />
        <ProductCards
          image="https://jabko.ua/image/cache/catalog/products/2022/09/081730/MPLT3ref_VW_34FR%20watch-45-alum-m-300x300.jpg"
          title="APPLE WATCH 8"
          price="450"
        />
        <ProductCards
          image="https://jabko.ua/image/cache/catalog/products/2022/09/081730/MPLT3ref_VW_34FR%20watch-45-alum-m-300x300.jpg"
          title="APPLE WATCH 8"
          price="450"
        />
        <ProductCards
          image="https://jabko.ua/image/cache/catalog/products/2022/09/081730/MPLT3ref_VW_34FR%20watch-45-alum-m-300x300.jpg"
          title="APPLE WATCH 8"
          price="450"
        />
      </div>
    </>
  );
}
