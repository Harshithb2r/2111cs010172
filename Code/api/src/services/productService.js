const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test';
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODc3NTA4LCJpYXQiOjE3MjM4NzcyMDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU5YzFkY2UwLWI4NGMtNDg4Ni1iYThlLWMxNTNjYTdjZWZiOCIsInN1YiI6IkhhcnNoaXRoLmdhbm5hdmFyYXB1MjNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkTWVkIiwiY2xpZW50SUQiOiI1OWMxZGNlMC1iODRjLTQ4ODYtYmE4ZS1jMTUzY2E3Y2VmYjgiLCJjbGllbnRTZWNyZXQiOiJqdUxRZGpCUWRrWWJlZVZZIiwib3duZXJOYW1lIjoiRy4gSGFyc2hpdGggS3VtYXIiLCJvd25lckVtYWlsIjoiSGFyc2hpdGguZ2FubmF2YXJhcHUyM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTExY3MwMTAxNzIifQ.Nhcu7yHZHNTqRl-o17Da4gjKbMxl3DJ-jUYK7VeBxIc";

async function fetchProducts(company, category, top, minPrice, maxPrice) {
    try {
        const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products`, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            params: { top, minPrice, maxPrice }
        });
        return response.data.map((product, index) => ({
            id: `${company}-${category}-${index}`, // Unique ID based on company, category, and index
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
    // Placeholder implementation; assumes you need to query each company
    // In a real scenario, you would likely need to search through products from each company
    return null;
}

module.exports = {
    getTopProducts,
    getProductById
};
