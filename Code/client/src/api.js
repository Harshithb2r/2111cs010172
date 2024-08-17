import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = async (category, filters) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/${category}/products`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODc5MTIyLCJpYXQiOjE3MjM4Nzg4MjIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU5YzFkY2UwLWI4NGMtNDg4Ni1iYThlLWMxNTNjYTdjZWZiOCIsInN1YiI6IkhhcnNoaXRoLmdhbm5hdmFyYXB1MjNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkTWVkIiwiY2xpZW50SUQiOiI1OWMxZGNlMC1iODRjLTQ4ODYtYmE4ZS1jMTUzY2E3Y2VmYjgiLCJjbGllbnRTZWNyZXQiOiJqdUxRZGpCUWRrWWJlZVZZIiwib3duZXJOYW1lIjoiRy4gSGFyc2hpdGggS3VtYXIiLCJvd25lckVtYWlsIjoiSGFyc2hpdGguZ2FubmF2YXJhcHUyM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTExY3MwMTAxNzIifQ.f5MywTw_GmllMrGiOcqbKUHDCRhLnt2y6SIZcHqwZxw`,
            },
            params: filters,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
