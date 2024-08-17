import React from 'react';

const ProductList = ({ products }) => {
    if (!products.length) {
        return <p>No products available.</p>;
    }

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    <h2>{product.productName}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                    <p>Availability: {product.availability}</p>
                    <p>Company: {product.company}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
