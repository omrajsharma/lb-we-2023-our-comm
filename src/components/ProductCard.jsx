import React from 'react'

const ProductCard = () => {
    const originalPrice = 7000;
    const discountInPercentage = 37;

  return (
    <div className='product-card'>
        <div className="product-img">
            <img src="https://rukminim2.flixcart.com/image/612/612/kazor680/cycle/4/f/d/scout-26t-sea-blue-black-for-ride-18-leader-single-speed-original-imafsf6wr2yxdfng.jpeg?q=70" alt="" />
        </div>
        <div className="product-name">
            LEADER Scout 26T SEA Blue BLACK
        </div>
        <div className="product-desc">
            Single Speed, Blue, Black
        </div>
        <div className="product-price">
            <span className="product-price-final">₹{originalPrice * ((100-discountInPercentage)/100)}</span>
            <span className="product-price-original">₹{originalPrice}</span>
            <span className="product-price-discount">{discountInPercentage}% off</span>
        </div>
    </div>
  )
}

export default ProductCard
