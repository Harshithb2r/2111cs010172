import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            const fetchedProduct = await fetchProductById('Laptop', productId); // Adjust the category as needed
            setProduct(fetchedProduct);
        };

        loadProduct();
    }, [productId]);

    return product ? (
        <div className="product-detail">
            <h1>{product.productName}</h1>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default ProductDetailPage;
