const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// Get top n products
router.get('/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const { n, page = 1, minPrice, maxPrice, sort, order = 'asc' } = req.query;

    try {
        const products = await productService.getTopProducts(categoryname, n, page, minPrice, maxPrice, sort, order);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// Get specific product by ID
router.get('/:categoryname/products/:productid', async (req, res) => {
    const { categoryname, productid } = req.params;

    try {
        const product = await productService.getProductById(categoryname, productid);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product details' });
    }
});

module.exports = router;
