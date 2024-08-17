import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductList from '../components/ProductList';
import './ProductPage.css';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ n: 10, minPrice: 1000, maxPrice: 5000, sort: 'price', order: 'asc' });

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts('Laptop', filters); // Adjust the category as needed
            console.log(fetchedProducts); // Debugging: Check what data is returned
            setProducts(fetchedProducts);
        };

        loadProducts();
    }, [filters]);

    return (
        <div className="products-page">
            <h1>Top Products</h1>
            <ProductList products={products} />
        </div>
    );
};

export default ProductsPage;
