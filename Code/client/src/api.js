import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const fetchProducts = async (category, filters) => {
    const response = await axios.get(`${API_BASE_URL}/categories/${category}/products`, { params: filters });
    return response.data;
};

export const fetchProductById = async (category, productId) => {
    const response = await axios.get(`${API_BASE_URL}/categories/${category}/products/${productId}`);
    return response.data;
};
