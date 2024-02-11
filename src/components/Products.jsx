import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='products'>
        <div className="products-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default Products
