"use client";

import BrandStore from "@/components/store/brand/brandStore";
import CateguryStore from "@/components/store/Categury/CateguryStore";
import AmazingOffer from "@/components/store/component/AmazingOffer";
import BannerStore, { PhotoStore } from "@/components/store/component/bannerStore";
import BestSellerStore from "@/components/store/component/BestSeller/bestSellerStore";
import BlogStore from "@/components/store/component/blogStore";
import CategorizeByProducts from "@/components/store/component/CategorizeByProducts";
import HeaderStore from "@/components/store/component/HeaderStore";
import HotProduct from "@/components/store/component/HotProduct";
import ProductList from "@/components/store/component/ProductList";
import SliderStore from "@/components/store/component/SliderStore";
import StoryMode from "@/components/store/component/storyMode/StoryMode";

export default function Page() {
  const firstBanner = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/2a5b728f11d3419f5920d33fab49ecff7e9ae3ef_1745829043.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/ccd8e454cd78595b2a0c87fb1b3bf2385554fb1e_1745827686.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/6458345d6c93344c94d5090073c55257982741b5_1745398383.gif?x-oss-process=image",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/d0ccf5778e39623a54924acaf54ead40a0caa7dc_1745819048.jpg?x-oss-process=image/quality,q_95",
  ];
  const SeccendBanner = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/1a5b3d33bf7b5b65d8229d1e40b7d1255c018269_1745839698.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/21028e67b42b317c24adea34ab388ddcc1e45707_1745839819.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/e02d45093f1821d5be48699f5de8da7b22de4b37_1745839856.jpg?x-oss-process=image/quality,q_95",
  ];
  const item = [
    {
      id: 1,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/bd5cd519a2e4b9b1c6818f0a10f96380766096d2_1728913311.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 2,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/054c1367feaed01af7e00548a59ad216031deb3c_1731150585.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 3,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/3659706.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 4,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/3e05544c4ed75052123a3456707520741c815e0e_1701151848.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  const Items2 = [
    {
      id: 1,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/c0a7ce006d11c222bce16bd3cdd8d79aeb6689bc_1738134271.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 2,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/79d453ff03437f2fe57480c8903b4014eef8713c_1735200761.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 3,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/d003f64e4be282e3ff35317a6f91149e0c04628b_1718456751.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 4,
      photo:
        "https://dkstatics-public.digikala.com/digikala-products/587531c61c0ec193de0b90a504cb9690f9959627_1731758709.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];
  return (
    <>
      <div
        className={`w-full min-h-screen flex flex-col justify-center items-center mx-auto shadow-lg`}
        style={{
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className={`w-full `}
        >
          <HeaderStore />
          <div
            className="w-full md:max-w-7xl mx-auto"
          >
            <StoryMode />
          </div>
          <SliderStore />
          <div className="w-full md:max-w-7xl mx-auto flex flex-col  items-start px-3 gap-4">
            <CateguryStore />
            <AmazingOffer />
            <PhotoStore photo={firstBanner} />
            <CategorizeByProducts Categurys={Items2} />
            {/* <SimilarGoods /> */}
            <PhotoStore photo={SeccendBanner} />
            <BrandStore />
            <BestSellerStore />
            <CategorizeByProducts Categurys={item} />
            <BannerStore />
            <ProductList />
            <HotProduct />
            <BlogStore />
          </div>
          {/* <Fotter /> */}
        </div>
      </div>
    </>
  );
}
