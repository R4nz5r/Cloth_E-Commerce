import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/Relatedproducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3  sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* product Details */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-35" />
            <img src={assets.star_icon} alt="" className="w-35" />
            <img src={assets.star_icon} alt="" className="w-35" />
            <img src={assets.star_icon} alt="" className="w-35" />
            <img src={assets.star_dull_icon} alt="" className="w-35" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "bg-orange-500 text-white" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="">100% original product</p>
            <p className="">Cash on delivery is available on this product</p>
            <p className="">Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description & review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            quasi, voluptates porro earum aspernatur, vero, corrupti harum sequi
            magnam fuga enim voluptate. Ipsam quasi, explicabo voluptates
            deleniti nam tempora delectus!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam consectetur aspernatur nisi corporis magnam, nulla dicta
            velit ipsam excepturi nobis labore quibusdam soluta, fugiat nihil
            quo culpa exercitationem accusamus.
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
