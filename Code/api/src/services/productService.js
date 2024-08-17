const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test';

async function fetchProducts(company, category, top, minPrice, maxPrice) {
    try {
        const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products`, {
            params: { top, minPrice, maxPrice }
        });
        return response.data.map((product, index) => ({
            id: `${company}-${category}-${index}`, // Use a composite key or simple string as a unique identifier
            ...product,
            company
        }));
    } catch (error) {
        console.error(`Error fetching products from ${company}:`, error.message);
        return [];
    }
}

async function getTopProducts(category, n, page, minPrice, maxPrice, sort, order) {
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
    let allProducts = [];

    for (let company of companies) {
        const products = await fetchProducts(company, category, n, minPrice, maxPrice);
        allProducts = [...allProducts, ...products];
    }

    if (sort) {
        allProducts.sort((a, b) => {
            if (order === 'asc') {
                return a[sort] > b[sort] ? 1 : -1;
            } else {
                return a[sort] < b[sort] ? 1 : -1;
            }
        });
    }

    const startIndex = (page - 1) * n;
    const paginatedProducts = allProducts.slice(startIndex, startIndex + n);

    return paginatedProducts;
}

async function getProductById(category, productId) {
    return null;
}

module.exports = {
    getTopProducts,
    getProductById
};
