import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({id, img, name, desc, price, discountPercentage}) => {        // props / properties
    const originalPrice = price;
    const discountInPercentage = discountPercentage;

  return (
    <Link to={'/product/' + id} >
        <div className='product-card'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                {name}
            </div>
            <div className="product-desc">
                {desc}
            </div>
            <div className="product-price">
                <span className="product-price-final">₹{originalPrice * ((100-discountInPercentage)/100)}</span>
                <span className="product-price-original">₹{originalPrice}</span>
                <span className="product-price-discount">{discountInPercentage}% off</span>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard
