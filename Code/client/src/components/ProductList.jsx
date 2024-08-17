import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-item" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <h2>{product.productName}</h2>
                    </Link>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                    <p>Availability: {product.availability}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
