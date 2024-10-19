import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="relative w-full h-auto overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm truncate">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
