import React from "react";
import ProductCard from "./ProductCard";
import {productList} from '../data/productList'

const Products = () => {
  return (
    <div className="products">
      <div className="products-container">
        {/* RENDERING LIST */}
        {productList.map((product, idx) => (
          <ProductCard
            key={idx}
            id={idx}
            img={product.img}
            name={product.name}
            desc={product.desc}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
